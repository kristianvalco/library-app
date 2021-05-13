import { LOGIN } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const login = (formData, history) => async (dispatch) => {
    try {
        // login user
        const { data } = await api.login(formData);

        dispatch({ type: LOGIN, data });

        history.push('/dashboard');
    } catch (error) {
        console.log(error.response.data);
    }
}

export const register = (formData, history) => async (dispatch) => {
    try {
        // register user
        const { data } = await api.register(formData);

        dispatch({ type: LOGIN, data });

        history.push('/dashboard');
    } catch (error) {
        console.log(error.response.data);
    }
}