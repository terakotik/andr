
import { type NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

// Используем service: 'gmail' для оптимальной конфигурации с Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, phone, productCategory } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Отсутствуют обязательные поля: имя, email или сообщение.' }, { status: 400 });
    }

    const isOrderForm = phone && productCategory;
    
    // --- ИЗМЕНЕНИЕ: Отправляем на несколько адресов ---
    const recipients = 'sale@andrgf.id, bm@andrgf.id';
    
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

    // 1. Отправка письма менеджерам
    const mailOptionsToManagers = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: recipients,
      replyTo: email, // Поле для удобного ответа клиенту
      subject: subjectToManagers,
      html: htmlToManagers,
    };

    await transporter.sendMail(mailOptionsToManagers);
    
    // 2. Отправка подтверждающего письма клиенту
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
      from: `"Andr Global Financial" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: subjectToClient,
      html: htmlToClient,
    };

    await transporter.sendMail(mailOptionsToClient);

    return NextResponse.json({ message: 'Сообщение успешно отправлено.' }, { status: 200 });

  } catch (error) {
    // Улучшенное логирование для детальной диагностики
    console.error('ПОЛНАЯ ОШИБКА ОТПРАВКИ ПОЧТЫ:', error);
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
    return NextResponse.json({ message: 'Не удалось отправить письмо.', error: errorMessage, details: error }, { status: 500 });
  }
}
