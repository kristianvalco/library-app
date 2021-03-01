import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
import Form from '../components/Form/Form';
import Posts from '../components/Posts/Posts';

const Contact = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div className="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6">
                        <Posts setCurrentId={setCurrentId} />
                    </div>
                    <div className="col-xl-6">
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
