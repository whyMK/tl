const nodemailer = require('nodemailer');

class SendMail {
  constructor() {
	var transporter = nodemailer.createTransport({
	  type: "SMTP",
	  host: 'smtp.yandex.ru',
	  port: 465,
	  secure: true, // true for 465, false for other ports
	  auth: {
	    user: 'order@toplaser.online', // generated ethereal user
	    pass: 'ToplaserOrder' // generated ethereal password
	  }
	});

	const htmlEmail = `
	  <h3>Hello my friend!</h3>
	  <p>This test message</p>
	  <p>Don't replay on this message</p>
	`

	let mailOptions = {
	  from: '"toplaser epilation" <order@toplaser.online>', // sender address
	  to: 'vpeskov@niomed.ru', // list of receivers
	  subject: 'Hello world!', // Subject line
	  text: 'Hello world?', // plain text body
	  html: htmlEmail
	  // html: '<p>Hello world?</p>' // html body
	}
  }

  sendMessage() {
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
  	    return console.log(err)
      }
      console.log('Message sent: %s', info.message);
    });
  }
};

export default SendMail;
