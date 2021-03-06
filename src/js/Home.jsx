import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import $ from "jquery"

import Top from './Top'
import Banner from './Banner'
import Menu from './Menu'
import Promo from './Promo'
import Price from './Price'
import Appointment from './Appointment'
import Announcement from './Announcement'
import Announcement2 from './Announcement2'
import Footer from './Footer'
import Telegram from './TelegramBot'
import SocialLink from './SocialLink'
import SendMail from './SendMailJS'

  // function dateToString(date) {
  //   var strDate = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  //   return strDate;
  // }

class Home extends React.Component {

  handleSubmit = (data) => {
    // var date = new Date;
    // var chatGroupId = '-385656981';  // Id группы
    // var chatBotId = '160347291';  // Id бота
    // var bot = new Telegram(chatGroupId);
    // bot.sendMessage(`${data[0]}, телефон: ${data[1]}, разместил заявку на сайте ${dateToString(date)} в салоне г. ${data[2]}`);

    var sendmail = new SendMail(data[0], data[1], data[2]);
    sendmail.sendFeedback();

  };


  render () {
    return (
      <div>
      	<header id="header">
          <div className="wrapper header">
            <Top />
            <Banner />
            <Menu />
          </div>
        </header>
        <Fragment>
          <Promo />
          <Price />
          <Appointment func={this.handleSubmit} />
          <SocialLink />
          <Announcement />
          <Appointment func={this.handleSubmit} />
          <SocialLink />
          <Announcement2 />
          <Appointment func={this.handleSubmit} />
          <Footer />
        </Fragment>
      </div>
    )
  }
}

export default Home
