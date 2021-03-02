import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? <div className="spinner-border" role="status" /> : (
            <div className="row">
                {posts.map((post) => (
                    <div className="col-xl-6" key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    )
}

export default Posts
