import React, { Fragment } from 'react'
import $ from "jquery"
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Menu from './Menu'
import Price from './Price'
import Top from './Top'
import Footer from './Footer'
import Actions from './Actions'
import Abonements from './Abonements'
import Contacts from './Contacts'
import SignUp from './Signup'

// import '../application/stylesheets/modal.css'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"

  return (
    <div>
      <div className={showHideClassName}>
        <div className="modal-callback">
          <button className="close-modal" onClick={handleClose}>X</button>
          {children}
        </div>
      </div>
    </div>
  )
}

const price_page =
  <div>
    <header id="header" className="wrapper header">
      <Top />
      <Menu />
    </header>
    <Fragment>
      <Price />
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
      <Footer />
    </Fragment>
  </div>

class TopLaser extends React.Component {

  state = { show: true };
  showModal = () => {
    console.log('setState true');
    this.setState({ show: true})
  };
  hideModal = () => {
    this.setState({ show: false})
  };

  render () {
    return (
      <>
      <div id="page-wrapper" className="page-wrapper home-page">
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
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <SignUp />
        </Modal>
      </div>
      </>
    );
  }
}

export default TopLaser
