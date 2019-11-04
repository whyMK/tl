class SendMail {
  constructor(fullname, phone, city) {
    
    var date = new Date;
    var strDate = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);

    var htmlEmail = `
      ${fullname}, телефон: ${phone}, разместил заявку на сайте ${strDate} в салоне г. ${city}
    `

    // var this.options = {"message_html": htmlEmail};


    this.template_params = {
         "reply_to": "order@toplaser.online",
         "from_name": "order@toplaser.online",
         "to_name": "merenokden@gmail.com",
         "message_html": htmlEmail
      }

    this.service_id = "default_service";
    this.template_id = "template_toplaser_order";

  }
  

  sendFeedback() {
    emailjs.send(
    this.service_id, this.template_id, this.template_params
    ).then(res => {
        console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}

export default SendMail;