import {
    SET_BLOGS,
    FETCH_BLOG_ID
} from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function fetchBlogs() {
    return function(dispatch) {
        const token = localStorage.getItem('token');
        const headers = {headers: {authorization: token}}
        axios.get(`${ROOT_URL}/blogs`, headers)
            .then(response => {
                dispatch({
                    type: SET_BLOGS,
                    payload:  response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export function fetchBlogWithId(id) {
    return {
        type: FETCH_BLOG_ID,
        payload: id
    }
}

export function createNewBlog(formData, success) {
    const token = localStorage.getItem('token');
    return function() {
        axios.post(`${ROOT_URL}/blogs/new`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: token
            }
        })
            .then(response => {
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function editBlog(itemId, formData, success) {
    const token = localStorage.getItem('token');
    const id = itemId;
    return function() {
        axios.post(`${ROOT_URL}/blogs/edit/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: token
            }
        })
            .then(response => {
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}