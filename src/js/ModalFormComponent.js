import React from 'react'
import PropTypes from 'prop-types'
import Telegram from './TelegramBot'
import selectImage from '../images/select.png'

function strDate(date) {
  strDate = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  return strDate;
}

class ModalForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', phone: '', city: ''};

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangePhone(event){
    this.setState({phone: event.target.value});
  }

  onChangeName(event) {
    this.setState({name: event.target.value});
  }

  onChangeCity(event) {
    this.setState({city: event.target.value});
  }

  onSubmit(event){
    var chatId = '-385656981';  // Id группы
    // chatId = '160347291';  // Id бота
    var date = new Date;
    var bot = new Telegram(chatId);
    bot.sendMessage(`${this.state.name}, телефон: ${this.state.phone}, разместил заявку на сайте ${strDate(date)} в салоне г.  ${this.state.city}`);
    event.preventDefault();
  }

  render () {
    return (
      <form className="form-modal" onSubmit={this.onSubmit}>
        // <div className="form-modal__text">
        //   Оставь заявку сейчас и получи скидку 10%
        // </div>
        <div className="form-modal__item">
          <input type="text" placeholder="Ваше имя" name="name" id="name" onChange={this.onChangeName}/>
        </div>
        <div className="form-modal__item">
          <input type="tel" placeholder="Ваш телефон" name="phone" id="tel" onChange={this.onChangePhone}/>
        </div>
        <div className="form-modal__select">
					<select name="city" value={this.state.city} onChange={this.onChangeCity}>
						<option disabled="" select="">Выберите город</option>
						<option value="Томск">Томск</option>
						<option value="Барнаул">Барнаул</option>
            <option value="Кемерово">Кемерово</option>
					</select>
        </div>
        <button id="sign-up">Записаться</button>
        <div className="form-modal__item checkbox">
          <input type="checkbox" id="checkbox" />
          <span>Я подтверждаю свое согласие на *:</span>
        </div>
        <div>
          <ul>
            <li>На использование в качестве каналов передачи информации, содержащейся в заявке, открытых каналов связи сети Интернет</li>
            <li>На обработку моих персональных данных в соответствии с федеральным законом РФ от 27.07.2006 №152-Ф3 "О персональных данных"</li>
          </ul>
        </div>
      </form>
    )
  }
}

export default ModalForm
