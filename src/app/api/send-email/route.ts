
import { type NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

// Настройка Nodemailer (ВАЖНО: Используйте переменные окружения!)
// Эти переменные нужно будет добавить в ваш файл .env.local
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,        // Например, 'smtp.yandex.ru' или 'smtp.google.com'
  port: parseInt(process.env.EMAIL_PORT || '587', 10), // Обычно 587 (TLS) или 465 (SSL)
  secure: process.env.EMAIL_PORT === '465', // true для порта 465, false для других
  auth: {
    user: process.env.EMAIL_USER,      // Ваш корпоративный email для отправки (например, no-reply@andrgf.id)
    pass: process.env.EMAIL_PASS,      // Пароль/токен приложения для этого email
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, phone, productCategory } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Отсутствуют обязательные поля: имя, email или сообщение.' }, { status: 400 });
    }

    // Определяем тему и тело письма в зависимости от наличия данных из формы заказа
    const isOrderForm = phone && productCategory;
    const subject = isOrderForm 
        ? `Новый заказ с сайта от: ${name}`
        : `Новая заявка с сайта от: ${name}`;

    const text = `
        Имя: ${name}
        Email: ${email}
        ${isOrderForm ? `Телефон: ${phone}` : ''}
        ${isOrderForm ? `Категория продукта: ${productCategory}` : ''}
        
        Сообщение:
        ${message}
    `;

    const html = `
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

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Адрес, с которого отправляется письмо
      to: process.env.BITRIX_EMAIL_ADDRESS, 
      replyTo: email,
      subject: subject,
      text: text,
      html: html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Сообщение успешно отправлено.' }, { status: 200 });

  } catch (error) {
    console.error('Ошибка при отправке почты:', error);
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
    return NextResponse.json({ message: 'Не удалось отправить письмо.', error: errorMessage }, { status: 500 });
  }
}
