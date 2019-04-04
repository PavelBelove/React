import React, { Component } from 'react';
import Post from './Post';

import './style.css';

class Blog extends React.Component {
    render() {
        const POSTS = this.props.items.map((item, index) => {
            return <Post key={index} title={item.title} postBody={item.postBody} date = {item.date} />
        });
        return (
            <>
                {POSTS}
                {/* проверить - нужны ли тут угловые скобки?  */}
            </>
        )
            ;

    };
};

export default Blog; 