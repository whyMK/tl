import React from 'react'
import titleSection from '../images/title-section.png'

class Contacts extends React.Component {
  render () {
    return (
      <div>
        <section className="contact-city-wrapper wrapper">
          <div className="container">
            <div className="title-wrapper">
              <div className="title-wrapper__inner">
                <div className="title-wrapper__header">
                  <img src={titleSection} alt="Раздел" />
                </div>
                <div className="title-wrapper__title">
                  Томск
                </div>
                <div className="title-wrapper__footer">
                  Как нас найти
                </div>
              </div>
            </div>
            <div className="contact-city-container">
              <div className="row">
                <div className="col-xs-12 col-md-4">
                  <div className="contact-wrap">
                    <div className="contact-list">
                      <ul>
                        <li className="contact-address">
                          г.Томск, пр. Комсомольский 15а, ТЦ «Остров», оф.403
                        </li>
                        <li className="contact-tel">
                          <a href="tel:+79832300938">+7 (983) 230-09-38</a>
                        </li>
                        <li className="contact-time">
                          9:00 — 21:00
                        </li>
                        <li className="contact-link">
                          <a href="http://marlen.tomsk.ru">https://www.instagram.com/toplaser_tomsk/</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-city-wrapper wrapper">
          <div className="container">
            <div className="title-wrapper">
              <div className="title-wrapper__inner">
                <div className="title-wrapper__header">
                  <img src={titleSection} alt="" />
                </div>
                <div className="title-wrapper__title">
                  Барнаул
                </div>
                <div className="title-wrapper__footer">
                  Как нас найти
                </div>
              </div>
            </div>
            <div className="contact-city-container">
              <div className="row">
                <div className="col-xs-12 col-md-4">
                  <div className="contact-wrap">
                    <div className="contact-list">
                      <ul>
                        <li className="contact-address">
                          Красноармейский проспект, 72 оф.918
                        </li>
                        <li className="contact-tel">
                          <a href="tel:+79832300938">+7 (983) 230-09-38</a>
                        </li>
                        <li className="contact-time">
                          9:00 — 21:00
                        </li>
                        <li className="contact-link">
                          <a href="https://www.instagram.com/toplaser_barnaul">www.instagram.com/toplaser_barnaul</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-wrapper wrapper">
          <div align="container">
            <div className="social-contact-block">
              <div className="social-contact-inner">
                <span>Мы в соц. сетях</span>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/toplaser_tomsk/" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
                    <p>Toplaser Томск</p>
                  </li>
                  <li>
                    <a href="https://vk.com/epilation_toplaser" rel="nofollow"><i className="mdi mdi-vk"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/toplaser_barnaul/"alt="barnaul" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
                    <p>Toplaser Барнаул</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contacts
