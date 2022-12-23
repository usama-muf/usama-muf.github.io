import { CREATE_POST, DELETE_POST, RETRIEVE_POST, UPDATE_POST } from './types';
import PostDataService from '../../services/post.service'

// export const createPost = (title, category, description) => async (dispatch) => {
export const createPost = (data) => async (dispatch) => {
    // const data = {
    //     title: title,
    //     category: category,
    //     description: description,
    // }
    console.log("data im createpost post.js", data);
    try {
        console.log("inside try")
        const res = await PostDataService.create(data);
        console.log(res)

        dispatch({
            type: CREATE_POST,
            payload: res.data,
        });

        return Promise.resolve(res.data);

    } catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
        return Promise.reject(error);
    }
}


export const retrievePost = () => async (dispatch) => {
    try {
        const res = await PostDataService.getAll();
        // const posts = res.data;

        dispatch({
            type: RETRIEVE_POST,
            payload: res.data,
        });


    } catch (error) {
        console.log('error in retrievePost', error);
    }
}


export const retrievePostById = (id) => async (dispatch) => {
    try {
        const res = await PostDataService.get(id);

        dispatch({
            type: RETRIEVE_POST,
            payload: res.data,
        });
    } catch (error) {
        console.log('error in retrievePostById', error);
    }
}


export const updatepost = (id, data) => async (dispatch) => {
    try {
        const res = await PostDataService.update(id, data);

        dispatch({
            type: UPDATE_POST,
            payload: res.data,
        });

        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        await PostDataService.delete(id);

        dispatch({
            type: DELETE_POST,
            payload: { id },
        });

    } catch (error) {
        console.log('error in deletepost', error);
    }
}


export const findPostByTitle = (title) => async (dispatch) => {
    try {
        const res = await PostDataService.findbyTitle(title);

        dispatch({
            type: DELETE_POST,
            payload: res.data,
        });


    } catch (error) {
        console.log('error in findpostbyid', error);
    }
}