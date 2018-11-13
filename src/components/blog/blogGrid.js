import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import BlogBox from './blogBox';
import BlogArchive from './blogArchive';
import BlogLatest from './blogLatest';
import Button from '../button';

import RequireAdmin from '../auth/requireAdmin';

class BlogGrid extends Component {

    handleAddBlog = () => {
        this.props.history.push('/blog/new');
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchBlogs();
        }, 1000);
    }

    render() {
        return (
            <div className='blog-grid'>
                <RequireAdmin>
                    <Button className='blog-grid__button' icon='fas fa-plus' callback={() => this.handleAddBlog()}/>
                </RequireAdmin>
                <BlogBox {...this.props.latestBlog}/>
                <BlogArchive/>
                <BlogLatest {...this.props.latestBlog}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { blogs } = state.blogs;
    const latestBlog = blogs[0];
    return {
        latestBlog
    }
}

export default connect(mapStateToProps, actions)(BlogGrid);