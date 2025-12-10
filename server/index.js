import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.post('/send_email', (req, res) => {
  const { name, email, message } = req.body;
  
  // Extract data from the request body
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.emailUser, // Use environment variable for email user
      pass: process.env.emailPass, // Use environment variable for email password
    },
  });

  const mailOptions = {
    from: email, // Use the email from the client's form as the sender
    to: process.env.emailUser, // Change this to the recipient's email address
    subject: 'Письмо отправленное через node.js',
    text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке сообщения:', error);
      res.status(500).send('Произошла ошибка при отправке сообщения.');
    } else {
      console.log('Сообщение успешно отправлено:', info.response);
      res.status(200).send('Сообщение успешно отправлено.');
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
