import React, { Component } from 'react';

class HeaderWrapper extends Component {
    render() {
        return (
            <div class='header-wrapper'>
                <h1>"Publish the blogs that you want"</h1>
                <p>Please sign in to continue</p>
                {this.props.children}
            </div>
        )
    }
}

export default HeaderWrapper;