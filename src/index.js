
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//import Developer from './Developer'

ReactDom.render( <
  App / > ,
  // указываем куда будет вставляться React приложение на странице
  document.querySelector('.container')
);