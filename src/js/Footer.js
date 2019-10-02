import React from 'react'
import footerLogo from '../images/footer-logo.png'

class Footer extends React.Component {
  render () {
    return (
      <footer id="footer" className="wrapper footer">
        <div className="top-footer">
          <div className="footer-wrap logo-footer">
            <a href="/">
    				  <img className="logo-image" src={footerLogo} alt="TopLaser" />
            </a>
            <div className="social-icon">
      				<ul>
                <li><a href="https://www.instagram.com/toplaser_tomsk/" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
                  <p>Томск</p>
                </li>
                <li><a href="https://www.instagram.com/toplaser_kemerovo/" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
                  <p>Кемерово</p>
                </li>
                <li><a href="https://www.instagram.com/toplaser_kemerovo/" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
                  <p>Барнаул</p>
                </li>
                <li> <a href="https://vk.com/epilation_toplaser" rel="nofollow"><i className="mdi mdi-vk"></i></a>
                  <p>ВК</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-wrap footer-nav">
            <div className="title-footer">
              Меню
            </div>
            <div className="footer-list">
              <ul>
                <li><a href="/price">Цены</a></li>
                <li><a href="/actions">Акции</a></li>
                <li><a href="./abonements">Абонементы</a></li>
                <li><a href="/contacts">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-wrap footer-contact">
            <div className="title-footer">
              Контакты
            </div>

            <div className="contact-right">
              <ul>
                <li className="footer-tel">
                  <a href="tel:+79832300938">+7-(983)-230-09-38</a>
                </li>
                <li className="footer-tel">
                  <a href="tel:+79966360896">+7-(996)-636-08-96</a>
                </li>
                <li className="footer-time">
    						  <span>ПН-ВС&nbsp; &nbsp; 9:00 - 21:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
