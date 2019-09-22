import React, { Fragment } from 'react';
import Modal from './Modal';
import ModalForm from './ModalForm';
import Button from './Button';
import Telegram from './TelegramBot'

function strDate(date) {
  strDate = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  return strDate;
}

class Signup extends React.Component {
  state = {
    isOpen: false
  }
  _isMounted = false;

  // openModal = () => {
  //   this.setState({ isOpen: true });
  // }

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
    var date = new Date;
    // alert(data);
    var chatGroupId = '-385656981';  // Id группы
    var chatBotId = '160347291';  // Id бота
    var bot = new Telegram(chatGroupId);
    bot.sendMessage(`${data[0]}, телефон: ${data[1]}, разместил заявку на сайте ${strDate(date)} в салоне г. ${data[2]}`);

    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>
        <Modal
          title="Оставь заявку сейчас и получи скидку 10%"
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
