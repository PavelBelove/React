import React, { Component } from 'react';
import MenuItems from './MenuItems';

import './style.css';

class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <MenuItems key={index} value={item.value} href={item.href} />
        });
        return (
            <ul className='menu'>
                {items}
                {/* <MenuItems value='Главная' href='./index.html' /> */}
            </ul>
        )
            ;

    };
};

export default Menu; 