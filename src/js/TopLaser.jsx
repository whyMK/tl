import React, { Fragment } from 'react'
import $ from "jquery"
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Menu from './Menu'
import Header from './Header'
import Price from './Price'
import Top from './Top'
import Footer from './Footer'
import Actions from './Actions'
import Abonements from './Abonements'
import Contacts from './Contacts'
import Signup from './Signup'
import Appointment from './Appointment'
import PriceWoman from './PriceWoman'
import PriceSet from './PriceSet'
import PriceMen from './PriceMen'
import SocialLink from './SocialLink'


const price_page =
  <div>
    <header id="header" className="wrapper header">
      <Top />
      <Menu />
    </header>
    <Fragment>
      <PriceWoman />
      <Appointment />
      <PriceSet />
      <Appointment />
      <PriceMen />
      <Appointment />
      <Footer />
    </Fragment>
  </div>

  const actions_page =
  <div>
    <header id="header" className="wrapper header">
      <Top />
      <Menu />
    </header>
    <Fragment>
      <Actions />
      <Footer />
    </Fragment>
  </div>

  const abonements_page =
  <div>
    <header id="header" className="wrapper header">
      <Top />
      <Menu />
    </header>
    <Fragment>
      <Abonements />
      <Footer />
    </Fragment>
  </div>

  const contacts_page =
  <div>
    <header id="header" className="wrapper header">
      <Top />
      <Menu />
    </header>
    <Fragment>
      <Contacts />
      <SocialLink />
      <Footer />
    </Fragment>
  </div>

class TopLaser extends React.Component {

  render () {
    return (
      <div>
        <header className="top-header-menu">
          <Header />
        </header>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              {
              // <Route exact path="/price" component={Price} />
              }
              <Route exact path="/price" render={() => price_page} />
              <Route exact path="/actions" render={() => actions_page} />
              <Route exact path="/abonements" render={() => abonements_page} />
              <Route exact path="/contacts" render={() => contacts_page} />
            </Switch>
          </BrowserRouter>
        </div>
        <div>
          <Signup />
        </div>
      </div>
    );
  }
}

export default TopLaser
