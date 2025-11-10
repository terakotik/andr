
import { type NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, phone, productCategory } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Отсутствуют обязательные поля: имя, email или сообщение.' }, { status: 400 });
    }

    // ВРЕМЕННОЕ РЕШЕНИЕ ДЛЯ ОТЛАДКИ: Учетные данные прописаны напрямую
    const user = "kursorik1@gmail.com";
    const pass = "fxhdjovxuzvyvklb";
    const bitrixEmail = "fwdmnuj5hgbzmogk48ggg8socgc@b24-4jaudn.bitrix24.ru";

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user,
        pass: pass,
      },
    });

    // 1. Проверка соединения
    await transporter.verify();

    const isOrderForm = phone && productCategory;
    const recipients = bitrixEmail ? `${bitrixEmail}, sale@andrgf.id, bm@andrgf.id` : 'sale@andrgf.id, bm@andrgf.id';
    
    const subjectToManagers = isOrderForm 
        ? `Новый заказ с сайта от: ${name}`
        : `Новая заявка с сайта от: ${name}`;

    const htmlToManagers = `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #333;">${isOrderForm ? 'Новый заказ с сайта' : 'Новая заявка с сайта'}</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${isOrderForm ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
        ${isOrderForm ? `<p><strong>Категория продукта:</strong> ${productCategory}</p>` : ''}
        <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
        <p><strong>Сообщение:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 10px; border-radius: 4px;">${message}</p>
      </div>
    `;

    // 2. Отправка письма менеджерам
    const mailOptionsToManagers = {
      from: `"${name}" <${user}>`,
      to: recipients,
      replyTo: email,
      subject: subjectToManagers,
      html: htmlToManagers,
    };
    await transporter.sendMail(mailOptionsToManagers);
    
    // 3. Отправка подтверждающего письма клиенту
    const subjectToClient = `Ваша заявка принята | Andr Global Financial`;
    const htmlToClient = `
      <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #333;">Здравствуйте, ${name}!</h2>
          <p>Благодарим за ваше обращение в Andr Global Financial. Ваша заявка успешно принята.</p>
          <p>Наш менеджер свяжется с вами в ближайшее рабочее время.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #777;">Это автоматическое уведомление, на него не нужно отвечать.</p>
          <p style="font-size: 14px; font-weight: bold; margin-top: 20px;">С уважением,<br>Команда Andr Global Financial</p>
      </div>
    `;
    const mailOptionsToClient = {
      from: `"Andr Global Financial" <${user}>`,
      to: email,
      subject: subjectToClient,
      html: htmlToClient,
    };
    await transporter.sendMail(mailOptionsToClient);

    return NextResponse.json({ message: 'Сообщение успешно отправлено.' }, { status: 200 });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
    console.error('ПОЛНАЯ ОШИБКА ОТПРАВКИ ПОЧТЫ:', error);
    return NextResponse.json({ message: 'Не удалось отправить письмо.', error: errorMessage }, { status: 500 });
  }
}
