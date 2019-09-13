import React from 'react'
import PropTypes from 'prop-types'
import selectImage from '../images/select.png'

class ModalForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', phone: '', city: ''};

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
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

  render () {
    return (
      <form className="form-modal">
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
      </form>
    )
  }
}

export default ModalForm
