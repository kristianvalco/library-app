import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (books = [], action) => { // eslint-disable-line
    switch (action.type) {
        case DELETE:
            return books.filter((book) => book._id !== action.payload);
        case UPDATE:
            return books.map((book) => book._id === action.payload._id ? action.payload : book);
        case FETCH_ALL:
            return action.payload;            
        case CREATE:
            return [...books, action.payload];                    
        default:
            return books;
    }
}