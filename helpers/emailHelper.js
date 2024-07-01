const nodemailer = require("nodemailer");
require('dotenv').config();

const emailHelper = async (to, subject, text) => {
    
    // Create a transporter
    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        secure: true,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSWORD,
        },
    });

    // Set up email options
    let mailOptions = {
        from: process.env.USERMAIL,
        to: to,
        subject: subject,
        text: text,
    };

    // Send the email
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

module.exports = emailHelper;