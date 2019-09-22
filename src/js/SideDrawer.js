import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
          <li><a href="/">Домой</a></li>
          <li><a href="/price">Цены</a></li>
          <li><a href="/actions">Акции</a></li>
          <li><a href="/abonements">Абонементы</a></li>
          <li><a href="/contacts">Контакты</a></li>
        </ul>
      </nav>
    </Drawer>
  );
};

export default SideDrawer;
