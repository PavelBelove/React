
import React, { Component } from 'react';
//import Btn from './Btn';
import Form from './Form';
import Menu from './Menu';

import './style.css';

class App extends Component {
  render() {
    const MENUITEMS = [
      {
        value: 'Главная',
        href: './index.html'
      }, {
        value: 'О нас',
        href: '#'
      }, {
        value: 'Контакты',
        href: '#'
      },
    ];
    return (
      <>
        <Menu items={MENUITEMS} />
        <h2>Форма авторизации</h2>
        <Form />
      </>
    );
  }
}

export default App;
