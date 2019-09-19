import React from 'react'

import '../css/side_drawer.css'

const SideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  // <nav className="side-drawer">

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Домой</a></li>
        <li><a href="/price">Цены</a></li>
        <li><a href="/actions">Акции</a></li>
        <li><a href="/abonements">Абонементы</a></li>
        <li><a href="/contacts">Контакты</a></li>
      </ul>
    </nav>
  )
}

export default SideDrawer
