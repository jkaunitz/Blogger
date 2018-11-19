import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewBlogForm from './blogNewForm';

class editBlog extends Component {
    
    onSubmit = (fields) => {

        const { title, body, image } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        this.props.editBlog(this.componentWillMount.match.params.id, formData, () => {
            this.props.history.push('/blog/new');
        })
        
    };

    onCancel = () => {
        this.props.history.push('/blog/new');
    };

    componentDidMount() {
        this.props.fetchBlogWithId(this.props.match.params.id)
    }

    render() {
        return (
            <div className='new-blog'>
                <NewBlogForm
                    blogToEdit={this.props.blogToEdit}
                    onCancel={() => this.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle='Edit Blog'
                    fieldOneTitle='Blog Title'
                    fieldTwoTitle='Body'
                />
            </div>
        );
    }
}

export default connect(null, actions)(editBlog);