import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
import Form from '../components/Form/Form';
import Posts from '../components/Posts/Posts';

const Contact = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <h1>Appka</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <Posts />
                    </div>
                    <div className="col-xl-6">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
