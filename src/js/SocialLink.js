import React from 'react';
import ReactDOM from "react-dom";

class SocialLink extends React.Component {

  render () {
    return (
      <section className="contact-wrapper wrapper">
        <div align="container">
          <div className="social-contact-block">
            <div className="social-contact-inner">
              <span>Мы в соц. сетях</span>
              <ul>
                <li>
                  <a href="https://www.instagram.com/toplaser_tomsk/" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
                  <p>Томск</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/toplaser_kemerovo/" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
                  <p>Кемерово</p>
                </li>
                <li>
                  <a href="https://www.instagram.com/toplaser_barnaul/"alt="barnaul" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
                  <p>Барнаул</p>
                </li>
                <li>
                  <a href="https://vk.com/epilation_toplaser" rel="nofollow"><i className="mdi mdi-vk"></i></a>
                  <p>ВК</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SocialLink
