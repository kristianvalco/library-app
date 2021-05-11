import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

export const fetchBooks = () => API.get('/books');
export const addNew = (newBook) => API.post('/books', newBook);
export const updateBook = (id, updatedBook) => API.patch(`/books/${id}`, updatedBook);
export const deleteBook = (id) => API.delete(`/books/${id}`);

export const login = (formData) => API.post('/user/login', formData);
export const register = (formData) => API.post('/user/register', formData);