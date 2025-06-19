require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

const enviarCredencialesCliente = async (toEmail, nombreCliente, contrasena, idOrden) => {
  const mailOptions = {
    from: `"Soporte Técnico" <${process.env.EMAIL_FROM}>`,
    to: toEmail,
    subject: 'Información de tu Orden y Acceso',
    text: `Hola ${nombreCliente},\n\nTu equipo ha sido registrado exitosamente.\n\nID de Orden: ${idOrden}\nContraseña de acceso: ${contrasena}\n\nPuedes usar esta información y tu Email para revisar el estado de tu equipo.\n\nGracias por confiar en nuestro servicio.`,
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
