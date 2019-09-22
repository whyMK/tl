import React from 'react';
// import DrawerToggleButton from './DrawerToggleButton';
import logo from '../images/logo.png';

const Toolbar = props => (

  <nav className="menu-navigation">
    {
      // <div className="drawer-toggle-button">
      //   <DrawerToggleButton click={props.drawerClickHandler}/>
      // </div>
    }
    <div className="logo-block">
      <a href="/"><img src={logo} alt="Top Laser" /></a>
		</div>
		<div className="top-nav">
      <ul>
        <li><a href="/price">Цены</a></li>
        <li><a href="/actions">Акции</a></li>
        <li><a href="/abonements">Абонементы</a></li>
        <li><a href="/contacts">Контакты</a></li>
      </ul>
		</div>
  </nav>
)

export default Toolbar
