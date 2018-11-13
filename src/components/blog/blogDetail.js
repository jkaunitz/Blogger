import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import BlogBox from './blogBox';
import BlogLatest from './blogLatest';

import { FormTitle } from '../formTitle';
import { FormButton } from '../formFields';

class BlogDetail extends Component {

    componentDidMount() {
        this.props.fetchBlogWithId(this.props.match.params.id);
    }

    render() {
        console.log(this.props.blogToEdit);
        return (
            <div className='blog-detail'>
                <FormTitle className='blog-detail__title' text='Blog Archive'/>
                <BlogBox date={this.props.blogToEdit}/>
                <BlogLatest {...this.props.blogToEdit}/>
                <FormButton
                    className='blog-detail__cancel'
                    small={true}
                    onClick={() => this.props.history.push('/dashboard')}
                    title='Cancel'
                    />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { blogToEdit } = state.blogs
    return { blogToEdit };
}

export default connect(mapStateToProps, actions)(BlogDetail);