import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <input name="creator" placeholder="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <input name="title" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <input name="message" placeholder="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <input name="tags" placeholder="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                <button type="submit">Submit</button>
                <button onClick={clear}>Clear</button>
            </form>
        </div>
    )
}

export default Form
