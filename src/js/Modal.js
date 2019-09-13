import React from 'react';
import PropTypes from 'prop-types';
import ModalForm from './ModalForm'
import Portal from './Portal';
import Icon from './Icon';
import Button from './Button';

import '../css/modal.css';

const Modal = ({
    title, isOpen, onCancel, onSubmit, children, func
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
                {children}
                <Button onClick={onCancel} invert>Выйти</Button>
                <Button onClick={(data) => func([SignForm.name.value, SignForm.phone.value, SignForm.city.value])}>Оставить заявку</Button>
              </div>
              <div className="modalFooter">
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
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: true,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default Modal



      // <form className="form-modal" onSubmit={this.onSubmit}>
      //   <div className="form-modal__text">
      //     Оставь заявку сейчас и получи скидку 10%
      //   </div>
      //   <div className="form-modal__item">
      //     <input type="text" placeholder="Ваше имя" name="name" id="name" onChange={this.onChangeName}/>
      //   </div>
      //   <div className="form-modal__item">
      //     <input type="tel" placeholder="Ваш телефон" name="phone" id="tel" onChange={this.onChangePhone}/>
      //   </div>
      //   <div className="form-modal__select">
			// 		<select name="city" value={this.state.city} onChange={this.onChangeCity}>
			// 			<option disabled="" select="">Выберите город</option>
			// 			<option value="Томск">Томск</option>
			// 			<option value="Барнаул">Барнаул</option>
      //       <option value="Кемерово">Кемерово</option>
			// 		</select>
      //   </div>
      //   <button id="sign-up">Записаться</button>
      //   <div className="form-modal__item checkbox">
      //     <input type="checkbox" id="checkbox" />
      //     <span>Я подтверждаю свое согласие на *:</span>
      //   </div>
      //   <div>
      //     <ul>
      //       <li>На использование в качестве каналов передачи информации, содержащейся в заявке, открытых каналов связи сети Интернет</li>
      //       <li>На обработку моих персональных данных в соответствии с федеральным законом РФ от 27.07.2006 №152-Ф3 "О персональных данных"</li>
      //     </ul>
      //   </div>
      // </form>
