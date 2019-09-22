import React, { useRef, useState, useEffect } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);
  const toggleDrawer = value => {
    setDrawerOpen(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [headerShow]);
  const handleScroll = () =>{
    (window.scrollY > 0) ? setHeaderShow(true) : setHeaderShow(false);
  }

  return (
    <AppBar
      style={{
        background: headerShow ? "transparent" : "#090050",
        color: "#000000",
        padding: "5px 0px"
      }}
    >
      <Toolbar>
        {
        // <div className="header_logo">
        //   <div className="font_left header_logo_title">wmg</div>
        //   <div className="font_left header_logo_caption">React mitting</div>
        // </div>
        }
        <IconButton aria-label="Menu" color="inherit" onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <SideDrawer open={drawerOpen} onClose={value => toggleDrawer(value)} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
