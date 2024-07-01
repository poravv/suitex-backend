const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";

const userMail = "marketing@suitex.com.py";
const passMail = "Marketing2024!";

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    //service: "mail.suitex.com.py",
    host: 'mail.suitex.com.py', // dominio smtp
    port: 465, // Puerto del servidor SMTP
    secure: true, // SSL
    auth: {
        user: userMail,
        pass: passMail,
    },
});

// Define a route for sending emails
// Set up email options
const mailOptions = {
    from: userMail,
    to: userMail,
    subject: "Test Email 222",
    text: "This is a test email from Node.js!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log("Email sent: " + info);
});