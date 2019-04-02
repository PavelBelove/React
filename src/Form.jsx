import React, { Component } from 'react';
import Inp from './Input';

import './style.css';

class Form extends React.Component {
    render() {

        return (
            <form name="test" method="post" action="#">
                <Inp type="text" placeholder="Введите логин" />
                <br />
                <Inp type="email" placeholder="Введите email" />
                <br />
                <Inp type="submit" value="Отправить" />

            </form>
        )
            ;

    };
};

export default Form; 