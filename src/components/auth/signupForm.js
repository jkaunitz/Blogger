import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

class SignupForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-up-form'>
                <FormTitle className='sign-up-form__title' text='Create User' />
                <Field
                    className='sign-up-form__fullname'
                    placeholder='Enter Your Full Name'
                    name='fullname'
                    type='text'
                    title='Full Name'
                    component={FormInput} 
                />
                <Field
                    className='sign-up-form__username'
                    placeholder='Enter Your Username'
                    name='username'
                    type='text'
                    title='Username'
                    component={FormInput} 
                />
                <Field
                    className='sign-up-form__address'
                    placeholder='Enter Home Address'
                    name='address'
                    type='text'
                    title='Home Address'
                    component={FormInput} 
                />
                <Field
                    className='sign-up-form__phone'
                    placeholder='Enter Mobile #'
                    name='phone'
                    type='tel'
                    title='Mobile #'
                    component={FormInput} 
                />
                <Field
                    className='sign-up-form__email'
                    placeholder='Enter Email'
                    name='email'
                    type='email'
                    title='Email'
                    component={FormInput} 
                />
                <Field
                    className='sign-up-form__password'
                    placeholder='Enter Password'
                    name='password'
                    type='password'
                    title='Password'
                    component={FormInput} 
                />
                <Field
                    className='sign-up-form__confirm-email'
                    placeholder='Confirm Email'
                    name='confirm-email'
                    type='email'
                    title='Confirm Email'
                    component={FormInput} 
                />
                <Field
                    className='sign-up-form__confirm-password'
                    placeholder='Confirm Password'
                    name='confirm-password'
                    type='password'
                    title='Confirm Password'
                    component={FormInput} 
                />
                <Field
                    className='sign-up-form__create-account'
                    name='createaccount'
                    type='submit'
                    title='Sign Up'
                    component={FormButton} 
                />
                <div className='sign-up-form__text-links'>
                    <TextLink to='/signin' text='Already Registered? Sign In'/>
                </div>

            </form>
        )
    }
}

SignupForm = reduxForm({
    form: "signup"
})(SignupForm);

export default SignupForm;