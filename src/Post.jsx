import React, { Component } from 'react';

import './style.css';

class Post extends React.Component {
    render() {
        let props = this.props;
        //console.log(props.inpType)
        return (
            <section>
                <h2>{props.title}</h2>
                <p>{props.postBody}</p>
                <span>{props.date}</span>
            </section>
        );

    };
};

export default Post; 