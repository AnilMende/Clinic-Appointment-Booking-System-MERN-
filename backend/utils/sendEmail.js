import nodemailer from 'nodemailer';


export const sendEmail = async ({ to, subject, text }) => {
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,            // ✅ 587 instead of 465
        secure: false,        // ✅ false for STARTTLS
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS   // ✅ Must be Gmail App Password
        },
        tls: {
            rejectUnauthorized: false      // ✅ Helps on cloud environments
        }
    });


    try {
        // ✅ Verify SMTP connection before sending
        await transporter.verify();
        console.log("SMTP connection verified ✓");

        const info = await transporter.sendMail({
            from: `"Clinic" <${process.env.EMAIL_USER}>`,
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