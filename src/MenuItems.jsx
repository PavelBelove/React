import React, { Component } from 'react';

import './style.css';

class MenuItems extends React.Component {
    render() {
        let props = this.props;
        //console.log(props.inpType)
        return (
            <a href={props.href}>
                <li>{props.value}</li>
            </a>
        );

    };
};

export default MenuItems; 