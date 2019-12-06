import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import sectionImg from '../images/girl-banner.png'

// var textStyle = { textAlign: 'left', color: '#ffffff', marginTop: '10px', fontSize: '10pt' };

const Appointment = ({ func }) => {
  return (
    <section className="banner-wrapper wrapper">
      <div className="container">
        <div className="row">
  			  <div className="col-xs-12 col-md-6">
            <div className="text-banner">
              <div className="title-banner">
                Оставь заявку и получи скидку 30%
              </div>
              <div className="title-banner__item">
                Скидка действует только на Томск и Кемерово
                </div>
              {
                // <p style={textStyle}><em>* Скидка действует только на Томск и на Барнаул</em></p>
              }
            </div>
          </div>
  			  <div className="col-xs-12 col-md-6">
  				  <div className="banner-form">
  				    <img className="girl-form" src={sectionImg} />
					    <div className="banner-form-container">
                <form name="AppForm">
                  <input type="text" placeholder="Имя" name="name" />
						      <input type="text" placeholder="Телефон" name="phone" />
    							<div className="select-container">
    								<select name="city">
    									<option disabled="" select="">Выберите салон</option>
    									<option value="Томск">Томск</option>
    									<option value="Барнаул">Барнаул</option>
                      <option value="Кемерово">Кемерово</option>
    								</select>
    							</div>
    							<label>
                    {
                      // <input id="submit-banner" type="submit" value="Записаться" onSubmit={(data) => func([AppForm.name.value, AppForm.phone.value, AppForm.city.value])} />
                    }

                    //<button onClick={(data) => func([AppForm.name.value, AppForm.phone.value, AppForm.city.value])}>Записаться</button>
                    <button id="submit-banner" onClick={(data) => func([AppForm.name.value, AppForm.phone.value, AppForm.city.value])}>Записаться</button>
    							</label>
                  {
                    // <div className="submit-banner-button">
                    //   <button onClick={(data) => func([AppForm.name.value, AppForm.phone.value, AppForm.city.value])}>Записаться</button>
                    // </div>
                  }
                  <div className="polite">
                    <input name="polite" id="ytFeedback_polite_771302" value="1" type="checkbox" required="" />
                    <label>Я подтверждаю свое согласие на *:</label>
                    <ul>
                      <li>На использование в качестве каналов передачи информации, содержащейся в заявке, открытых каналов связи сети Интернет</li>
                      <li>На обработку моих персональных данных в соответствии с федеральным законом РФ от 27.07.2006 №152-Ф3 "О персональных данных"</li>
                    </ul>
                  </div>
    						</form>
					    </div>
            </div>
  				</div>
  			</div>
  		</div>
    </section>
  )
}

export default Appointment
