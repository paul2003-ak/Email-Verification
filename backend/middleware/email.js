const emailconfig  = require("./email.config");
const emailtemplate = require("./emailtemplate");


module.exports.sendverificationcode = async (email, verificationcode) => {
    try {
        const response = await emailconfig.transporter.sendMail({
            from: '"Balaji TV Official" <bablijoy08@gmail.com>', // sender address
            to: email, // email of receivers
            subject: "Verify Your Email", // Subject line
            text: "Verify Your Eail",
            html: emailtemplate.Verification_Email_Template.replace("{verificationCode}",verificationcode)
        });
        console.log("email send successfully", response)
    } catch (error) {
        console.log("email error", error)
    }
}

module.exports.wellcomeemail = async (email,name) => {
    try {
        const response = await emailconfig.transporter.sendMail({
            from: '"Balaji TV Official" <bablijoy08@gmail.com>', // sender address
            to: email, // email of receivers
            subject: "Wellcome Email", // Subject line
            text: "Wellcome Email",
            html: emailtemplate.Welcome_Email_Template.replace("{name}",name)
        });
        console.log("email send successfully", response)
    } catch (error) {
        console.log("email error", error)
    }
}
