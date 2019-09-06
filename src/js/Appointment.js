import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import sectionImg from '../images/girl-banner.png'

var textStyle = { textAlign: 'left', color: '#ffffff', marginTop: '10px', fontSize: '10pt' };

class Appointment extends React.Component {
  render () {
    return (
      <section className="banner-wrapper wrapper">
        <div className="container">
          <div className="row">
    			  <div className="col-xs-12 col-md-6">
              <div className="text-banner">
                <div className="title-banner">
                  Оставь заявку и получи скидку 10%
                </div>
                <p style={textStyle}><em>* Скидка действует только на Томск и на Барнаул</em></p>
              </div>
            </div>
    			  <div className="col-xs-12 col-md-6">
    				  <div className="banner-form">
    				    <img className="girl-form" src={sectionImg} />
  					    <div className="banner-form-container">
                  <form action="/lazernaya-epilyaciya/" method="POST">
                    <input type="text" placeholder="Имя" name="user_name"  />
							      <input type="tel" placeholder="Телефон" name="user_phone"  />
      							<div className="select-container">
      								<select name="user_about">
      									<option disabled="" select="">Выберите салон</option>
      									<option value="1">Томск</option>
      									<option value="2">Барнаул</option>
      								</select>
      							</div>

      							<label>
                      <input id="submit-banner" type="submit" value="Записаться" />
      							</label>

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
}

export default Appointment
