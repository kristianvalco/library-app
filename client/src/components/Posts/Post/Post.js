import React from 'react';
// import Posts from '../Posts';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

// CSS
import './Post.scss';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <div className="post">
            <div className="card">
                <img src={post.selectedFile} className="card-img-top" alt={post.title} />
                <div className="card-body">
                    <h3 className="card-title">{post.title}</h3>
                    <h5>{post.creator}</h5>
                    <p className="text-muted">{moment(post.createdAt).fromNow()}</p>
                    <p className="card-text">{post.message}</p>
                    <p>{post.tags.map((tag) => `#${tag} `)}</p>
                    <button 
                        onClick={() => setCurrentId(post._id)} 
                        className="btn btn-secondary">
                            ...
                    </button>
                    <button onClick={() => dispatch(likePost(post._id))} className="btn btn-primary float-start">
                        Like
                        {post.likeCount}
                    </button>
                    <button onClick={() => dispatch(deletePost(post._id))} className="btn btn-primary float-end">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post
