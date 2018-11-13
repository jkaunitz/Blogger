import {
    SET_BLOGS,
    FETCH_BLOG_ID
} from '../actions/types';

const INITIAL_STATE = {
    blogs: [],
    blogEdit: {}
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_BLOGS:
            const blogs = action.payload;
            return {
                ...state,
                blogs
            }
        case FETCH_BLOG_ID:
            const blogID = action.payload;
            var blogToEdit = {};
            state.blogs.map(blog => {
                if(blog._id == blogID) {
                    blogToEdit = blog;
                }
            })
            return {
                ...state,
                blogToEdit
            }
        default: return state;
    }
}