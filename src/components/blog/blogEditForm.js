import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';

import { ROOT_URL } from '../../config';

class editBlogForm extends Component {
    
    render() {

        const { handleSubmit, formTitle } = this.props;
        const { 
            fieldOnePlaceholder, fieldOneTitle,
            fieldTwoPlaceholder, fieldTwoTitle  
        } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className='new-blog-form'>
                <FormTitle className='new-blog-form__title' text={formTitle} />
                <Field
                    className='new-blog-form__blog-title'
                    placeholder={fieldOnePlaceholder}
                    name='title'
                    type='text'
                    title={fieldOneTitle}
                    component={FormInput}
                />
                <Field
                    className='new-blog-form__body'
                    placeholder={fieldTwoPlaceholder}
                    name='body'
                    type='text'
                    title={fieldTwoTitle}
                    component={FormTextArea}
                />
                <Field
                    className='new-blog-form__submit'
                    small={true}
                    danger={true}
                    name='submit'
                    type='submit'
                    title='Submit'
                    component={FormButton} 
                />
                <Field
                    className='new-blog-form__cancel'
                    small={true}
                    name='cancel'
                    type='button'
                    title='Cancel'
                    component={FormButton}
                    onClick={this.props.onCancel}
                />
                <Field
                    className='new-blog-form__image'
                    small={true}
                    name='image'
                    type='file'
                    title='Image'
                    component={FormImage}
                    imageUrl={this.props.initialValues.imageUrl ? 
                            `${ROOT_URL}/${this.props.initialVAlues.imageUrl}` :
                            `http://via.placeholder.com/150x137`}
                />
                
            </form>
        );
    }
}

NewBlogForm = reduxForm({
    form: 'editBlog',
    enableReinitialize: true
})(editBlogForm);

function mapStateToProps(state) {
    const { blogToEdit } = state.blogs;
    return {
        initialValues: blogToEdit
    }
}

editBlogForm = connect(mapStateToProps)(editBlogForm);

export default editBlogForm;