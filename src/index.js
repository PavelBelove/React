import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Developer from './Developer'

ReactDom.render(
  <App />,
  // указываем куда будет вставляться React приложение на странице
  document.querySelector('#web-page')
);


