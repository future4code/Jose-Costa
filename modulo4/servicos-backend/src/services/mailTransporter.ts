import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: { ciphers: "SSLv3" }
});

export const sendEmail = async (email: string, subject: string, html: string): Promise<void> => {
    try {
       const info = await transporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject,
            html
        });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
        console.log(err)
    }
}
