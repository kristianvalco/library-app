import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getBooks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBooks();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const addNew = (book) => async (dispatch) => {
    try {
        const { data } = await api.addNew(book);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post);

//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id);

//         dispatch({ type: DELETE, payload: id });
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const likePost = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.likePost(id);

//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// }