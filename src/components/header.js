import React from 'react';

export function Header({ title }) {
    return (
        <div className='header'>
            <h1 className='header__title'>My Blogger!</h1>
        </div>
    )
}

export function HeaderBar({hideBar}) {
    if(hideBar) {
        return <div></div>
    } else {
        return <div className='bar'></div>
    }
}