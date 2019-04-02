import React, { Component } from 'react';

import './style.css';

class Inp extends React.Component {
    render() {
        let props = this.props;
        //console.log(props.inpType)
        return (
            <input type={props.type} value={props.value} placeholder={props.placeholder}></input>
        );

    };
};

export default Inp; 