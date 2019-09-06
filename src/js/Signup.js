import React from 'react'
import PropTypes from 'prop-types'
import selectImage from '../images/select.png'

class SignUp extends React.Component {
  render () {
    return (
      <form method="POST" className="form-modal">
        <div className="form-modal__text">
          Оставь заявку сейчас и получи скидку 10%
        </div>
        <div className="form-modal__item">
          <input type="text" placeholder="Ваше имя" id="name" />
        </div>
        <div className="form-modal__item">
          <input type="tel" placeholder="Ваш телефон" id="tel" />
        </div>
        <div className="form-modal__select">
					<select name="select_saloon">
						<option disabled="" select="">Выберите город</option>
						<option value="1">Томск</option>
						<option value="2">Барнаул</option>
					</select>
        </div>
        <button>Записаться</button>
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

export default SignUp
