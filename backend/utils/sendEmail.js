import nodemailer from 'nodemailer';


export const sendEmail = async ({ to, subject, text }) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.BREVO_USER,   // a73c1f001@smtp-brevo.com
            pass: process.env.BREVO_PASS    // your full SMTP key
        }
    });

    try {
        await transporter.verify();
        console.log("SMTP connection verified ✓");

        const info = await transporter.sendMail({
            from: `"Clinic" <${process.env.BREVO_USER}>`,
            to,
            subject,
            text
        });

        console.log("Email sent:", info.messageId);
        return info;

    } catch (error) {
        console.error("Email error:", error.message);
        throw error;
    }
};

