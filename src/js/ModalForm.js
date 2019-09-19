import React from 'react'
import PropTypes from 'prop-types'
import selectImage from '../images/select.png'

const ModalForm = () => {

  return (
    <form name="SignForm">
      <div className="form-modal-item">
        <input type="text" placeholder="Ваше имя" name="name" id="name"/>
      </div>
      <div className="form-modal-item">
        <input type="text" placeholder="Ваш телефон" name="phone" id="tel"/>
      </div>
      <div className="form-modal-select">
				<select name="city" className="select">
					<option disabled="" select="">Выберите город</option>
					<option value="Томск">Томск</option>
					<option value="Барнаул">Барнаул</option>
          <option value="Кемерово">Кемерово</option>
				</select>
      </div>
    </form>
  )
}

export default ModalForm
