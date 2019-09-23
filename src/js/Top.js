import React from 'react';
import ReactDOM from "react-dom";

class Top extends React.Component {

  render () {
    return (
    	<div className="top-header">
        <div className="social-icon">
    			<ul>
            <li>
              <a href="https://www.instagram.com/toplaser_tomsk/" rel="nofollow"><i className="mdi mdi-instagram"></i></a>
            </li>
            <li>
              <a href="https://vk.com/epilation_toplaser" rel="nofollow"><i className="mdi mdi-vk"></i></a>
            </li>
          </ul>
        </div>
    		<div className="header-info">
    			<div className="container">
    				<div className="inf-header infh-time">
    					9:00 - 21:00
            </div>
    				<div className="inf-header infh-address">
    					Томск, Барнаул
            </div>
    			</div>
    		</div>
    		<div className="header-tel">
    			<a href="tel:+79832300938">+7 (983) 230-09-38</a>
        </div>
      </div>
    )
  }
}

export default Top
