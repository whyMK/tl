import React from 'react'
import logo from '../images/logo.png'

class Menu extends React.Component {
  render () {
    return (
      <div className="bot-header">
        <div className="header-btn open-nav"></div>
    		<div className="container">
          <div className="logo-block">
            <a href="/">
    				  <img src={logo} alt="Top Laser" />
            </a>
    			</div>
    			<div className="top-nav">
            <ul>
              <li><a href="/price">Цены</a></li>
              <li><a href="/actions">Акции</a></li>
              <li><a href="/abonements">Абонементы</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
    			</div>
    		</div>
      </div>
    )
  }
}

export default Menu
