import React from 'react';
import PropTypes from 'prop-types';
import ModalForm from './ModalForm'
import Portal from './Portal';
import Icon from './Icon';
// import Button from './Button';

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
              <div className="close-modal" onClick={onCancel}>X</div>
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
              </div>
              <div className="modalBody">
                {children}
                  <button onClick={(data) => func([SignForm.name.value, SignForm.phone.value, SignForm.city.value])}>Оставить заявку</button>
              </div>
              <div className="modalFooter">
                <div className="form-modal-item checkbox">
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
