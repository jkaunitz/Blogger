import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';


class NewBlogForm extends Component {
    
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
            </form>
        );
    }
}

NewBlogForm = reduxForm({
    form: 'newblog'
})(NewBlogForm);

export default NewBlogForm;