import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewBlogForm from './blogNewForm';

class NewBlog extends Component {

    onSubmit = fields => {

        const { title, body } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);

        this.props.createNewBlog(formData, () => {
            this.props.history.push('/blog/new');
        })
    
    };

    onCancel = (fields) => {
        this.props.history.push('/blog/new');
    };

    render() {
        return (
            <div className='new-blog'>
                <NewBlogForm 
                    onCancel={() => this.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle='New Blog'
                    fieldOnePlaceholder='Blog Title'
                    fieldOneTitle='Blog Title'
                    fieldTwoPlaceholder='Body Here'
                    fieldTwoTitle='Body'
                />
            </div>
        );
    }
}

NewBlog = connect(null, actions)(NewBlog);

export default NewBlog;