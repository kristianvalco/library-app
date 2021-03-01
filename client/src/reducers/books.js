import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (books = [], action) => { // eslint-disable-line
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;            
        case CREATE:
            return [...books, action.payload];                    
        default:
            return books;
    }
}