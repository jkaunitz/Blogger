import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from './newsletterNewForm';

class EditNewsletter extends Component {
    
    onSubmit = (fields) => {

        const { title, body, image } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        this.props.editNewsletter(this.componentWillMount.match.params.id, formData, () => {
            this.props.history.push('/dashboard');
        })
        
    };

    onCancel = () => {
        this.props.history.push('/dashboard');
    };

    componentDidMount() {
        this.props.fetchNewsletterWithId(this.props.match.params.id)
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm
                    newsletterToEdit={this.props.newsletterToEdit}
                    onCancel={() => this.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle='Edit Newsletter'
                    fieldOneTitle='Newsletter Title'
                    fieldTwoTitle='Body'
                />
            </div>
        );
    }
}

export default connect(null, actions)(EditNewsletter);