import axios from 'axios';

const url = 'http://localhost:5000/books';

export const fetchBooks = () => axios.get(url);
export const addNew = (newBook) => axios.post(url, newBook);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);