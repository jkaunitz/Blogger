import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignupForm from './signupForm';

class Signup extends Component {

    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            console.log('navigate to new blog');
            this.props.history.push('/blog/new');
        })
    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Signup);