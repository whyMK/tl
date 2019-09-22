import React from 'react';
// import DrawerToggleButton from './DrawerToggleButton';
// import Toolbar from './Toolbar';
import DrawerToggleButton from './DrawerToggleButton';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import logo from '../images/logo.png';

class MobileMenu extends React.Component {
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
      <div className="mobile-menu">
        {
          // <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        }
        <div className="drawer-toggle-button">
          <DrawerToggleButton click={this.drawerToggleClickHandler}/>
        </div>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {
          // {sideDrawer}
        }
        {backdrop}
      </div>
    )
  }
}

export default MobileMenu
