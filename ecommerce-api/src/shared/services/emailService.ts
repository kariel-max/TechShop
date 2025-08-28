import nodemailer from 'nodemailer'

export const sendEmail = async (to: string, subject: string, html: string)=> {

    const transporter = nodemailer.createTransport({
        host: "smpt.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });

    const mailOptions = { 
        from: `"Minha loja <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado:", info.messageId);
}