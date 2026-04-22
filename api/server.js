import { Resend } from 'resend';

// Esta variable debe estar configurada en tu panel de Vercel (Environment Variables)
const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  // Solo permitimos el método POST (que es el que envía tu formulario)
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  try {
    // Estas variables (name, email, message) deben coincidir 
    // exactamente con el "name" de tus inputs en React
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Dominio por defecto de Resend
      to: 'karen.cassani.p@gmail.com', // Tu correo personal
      subject: `Nuevo mensaje de ${name} ✨`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #f9a8d4;">¡Tienes un nuevo mensaje de tu portfolio!</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Mensaje:</strong></p>
          <p style="background: #fdf2f8; padding: 15px; border-radius: 10px;">${message}</p>
        </div>
      `,
    });

    // Si todo sale bien, respondemos con éxito
    return res.status(200).json({ success: true, data });

  } catch (error) {
    // Si algo falla con Resend o la conexión
    return res.status(502).json({ error: error.message });
  }
};

export default handler;