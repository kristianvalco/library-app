import { combineReducers } from 'redux';

import books from './books';
import login from './login';

export default combineReducers({ books, login });