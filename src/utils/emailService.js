require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

const enviarCredencialesCliente = async (toEmail, nombreCliente, contrasena) => {
  const mailOptions = {
    from: `"Soporte Técnico" <${process.env.EMAIL_FROM}>`,
    to: toEmail,
    subject: 'Tus credenciales de acceso',
    text: `Hola ${nombreCliente},\n\nTu cuenta ha sido creada exitosamente.\nTu contraseña de acceso es: ${contrasena}\n\nPor favor cámbiala luego de iniciar sesión.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado a', toEmail);
  } catch (error) {
    console.error('Error al enviar correo:', error);
    throw error;
  }
};

module.exports = { enviarCredencialesCliente };
