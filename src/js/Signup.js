import React, { Fragment } from 'react';
import Modal from './Modal';
import ModalForm from './ModalForm';
import Button from './Button';
import Telegram from './TelegramBot';
import SendMail from './SendMailJS';

// function strDate(date) {
//   strDate = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
//   return strDate;
// }

class Signup extends React.Component {
  state = {
    isOpen: false
  }
  _isMounted = false;


  openModal() {
    setTimeout(() => {
      this._isMounted = true;
      this.setState({ isOpen: true })
    }, 15000)
  }

  componentDidMount() {
    this.openModal();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSubmit = (data) => {
    // var date = new Date;
   
    // var chatGroupId = '-385656981';  // Id группы
    // var chatBotId = '160347291';  // Id бота
    // var bot = new Telegram(chatGroupId);
    // bot.sendMessage(`${data[0]}, телефон: ${data[1]}, разместил заявку на сайте ${date} в салоне г. ${data[2]}`);

    var sendmail = new SendMail(data[0], data[1], data[2]);
    //sendmail.sendMessage(data[0], data[1], strDate(date), data[2]);
    sendmail.sendFeedback();

    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>
        <Modal
          title="Оставь заявку сейчас и получи скидку 15%"
          func={this.handleSubmit}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        <ModalForm />
        </Modal>
      </Fragment>
    );
  }
}

export default Signup
