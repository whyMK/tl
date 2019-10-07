const nodemailer = require('nodemailer');

const sendmail;

var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
    }
});

// send mail with defined transport object
var info = await transporter.sendMail({
    from: '"toplaser epilation" <order@toplaser.online>', // sender address
    to: 'vpeskov@niomed.ru', // list of receivers
    subject: 'Hello world!', // Subject line
    text: 'Hello world?', // plain text body
    html: '<p>Hello world?</p>' // html body
});

console.log('Message sent: %s', info.messageId);

export default sendmail;