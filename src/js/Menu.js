import React from 'react';
// import DrawerToggleButton from './DrawerToggleButton';
import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import logo from '../images/logo.png';

class Menu extends React.Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render () {
    let backdrop
    // let sideDrawer

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      // sideDrawer = <SideDrawer />
    }

    return (
      <div className="bot-header">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {
          // {sideDrawer}
        }
        {backdrop}
      </div>
    )
  }
}

export default Menu
