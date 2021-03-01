import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <h3>{currentId ? 'Upravujem' : 'Vytvaram'}  lasku</h3>
                <input name="creator" placeholder="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <input name="title" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <input name="message" placeholder="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <input name="tags" placeholder="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                <button type="submit">Submit</button>
                <button onClick={clear}>Clear</button>
            </form>
        </div>
    )
}

export default Form
