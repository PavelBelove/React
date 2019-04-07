
import React, { Component } from 'react';
import $ from 'jquery';
import WelcomeModal from './WelcomeModal';
import Menu from './Blog';

import './style.css';

class App extends React.Component {


  render() {
    const MENUITEMS = [
      {
        title: 'lorem',
        postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquid aspernatur possimus, eveniet aliquam in quam labore dignissimos culpa ratione earum nam sint ad cumque repellendus, provident sed. Natus, alias?',
        date: '4.04.19'
      }, {
        title: 'lorem',
        postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquid aspernatur possimus, eveniet aliquam in quam labore dignissimos culpa ratione earum nam sint ad cumque repellendus, provident sed. Natus, alias?',
        date: '4.04.19'
      }, {
        title: 'lorem',
        postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquid aspernatur possimus, eveniet aliquam in quam labore dignissimos culpa ratione earum nam sint ad cumque repellendus, provident sed. Natus, alias?',
        date: '4.04.19'
      },
    ];

    return (
      <>
        <Menu items={MENUITEMS} />
        <WelcomeModal />


      </>
    );
  }
}

export default App;
