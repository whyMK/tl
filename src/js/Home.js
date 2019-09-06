import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import $ from "jquery"

import Top from './Top'
import Banner from './Banner'
import Menu from './Menu'
import Promo from './Promo'
import Price from './Price'
import Appointment from './Appointment'
import Announcement from './Announcement'
import Footer from './Footer'

class Home extends React.Component {

  render () {
    return (
      <div>
      	<header id="header" className="wrapper header">
          <Top />
          <Banner />
          <Menu />
        </header>
        <Fragment>
          <Promo />
          <Price />
          <Appointment />
          <Announcement />
          <Footer />
        </Fragment>
      </div>
    )
  }
}

export default Home
