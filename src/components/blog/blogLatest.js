import React, { Component } from 'react';

import Button from '../button';

import history from '../../history';

import { ROOT_URL } from '../../config';

import RequireAdmin from '../auth/requireAdmin';

class BlogLatest extends Component {

    handleEdit = () => {
        history.push(`/blog/edit/${this.props._id}`);
    }

    render() {
        const { title, imageUrl, body } = this.props;
        return (
            <div className='blog-latest'>
                <h1 className='blog-latest__title'>{title}</h1>
                <img className='blog-latest__image' src={imageUrl}/>
                <RequireAdmin>
                    <Button className='blog-latest__button' callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/>
                </RequireAdmin>
                <div className='blog-latest__body'>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default BlogLatest;