import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import logo2 from '../images/logo2.png';
import SocialLink from './SocialLink'

import '../css/side_drawer.css'

const SideDrawer = props => {
  return (
    <Drawer
      anhor = "right"
      open = {props.open}
      onClose = {() => props.onClose(false)}
      >
      <nav className="side-drawer">
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/price">Цены</a></li>
          <li><a href="/actions">Акции</a></li>
          <li><a href="/abonements">Абонементы</a></li>
          <li><a href="/contacts">Контакты</a></li>
        </ul>
        <div className="logo-block-cat">
          <a href="/"><img src={logo2} alt="Cat" /></a>
        </div>
      </nav>
    </Drawer>
  );
};

export default SideDrawer;
