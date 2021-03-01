import { combineReducers } from 'redux';

import posts from './posts';
import books from './books';

export default combineReducers({ posts, books });