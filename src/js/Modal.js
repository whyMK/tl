import React from 'react'
import PropTypes from 'prop-types'
import selectImage from '../images/select.png'

class Modal extends React.Component {
  render () {
    return (
      <div className="modal-callback">
        <div className="close-modal">X</div>
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
          <div className="form-modal__item">
            <div className="form-modal__dropdown">
              <span id="city">Выберите город</span>
              <img src={selectImage} alt="Выпадающее меню" />
              <ul>
                <li>Томск</li>
                <li>Барнаул</li>
              </ul>
            </div>
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
      </div>
    )
  }
}

export default Modal
