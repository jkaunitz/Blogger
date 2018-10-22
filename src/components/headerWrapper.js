import React, { Component } from 'react';
import HeaderBar from './headerBar';

class HeaderWrapper extends Component {
    render() {
        return [
            <div className='header-wrapper'>
                <h1 className='header-wrapper__title'>"Publish the blogs that you want"</h1>
                <p className='header-wrapper__subtitle'>Please sign in to continue</p>

            </div>,
            HeaderBar(),
            this.props.children
        ]
    }
}

export default HeaderWrapper;