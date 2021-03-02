import axios from 'axios';

const url = 'http://localhost:5W000/books';

export const fetchBooks = () => axios.get(url);
export const addNew = (newBook) => axios.post(url, newBook);
export const updateBook = (id, updatedBook) => axios.patch(`${url}/${id}`, updatedBook);
export const deleteBook = (id) => axios.delete(`${url}/${id}`);