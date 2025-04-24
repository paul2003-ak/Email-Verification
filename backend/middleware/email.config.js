const nodemailer = require("nodemailer");

module.exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "bablijoy08@gmail.com",
        pass: "zpqr dnfy monz zrki",
    },
});


