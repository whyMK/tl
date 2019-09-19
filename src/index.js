import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import './css/application.scss'
import './css/media.scss'
import './css/media_bootstrap.scss'
import './css/main.css'
import './css/jquery.fancybox.scss'
import './css/modal.css'
import './css/poiskpro.scss'
import './css/materialdesignicons.min.scss'

import TopLaser from './js/TopLaser'

ReactDOM.render((
  <div>
    <TopLaser />
  </div>),
  document.getElementById('app')
);

module.hot.accept();
