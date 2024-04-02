var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "trinhpkph31536@fpt.edu.vn",
        pass: "gtaz orwz owvr qhgm"
    }
});
module.exports = transporter 