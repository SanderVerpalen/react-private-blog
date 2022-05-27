import React from 'react';
import posts from '../data/posts.json'
import {useParams} from "react-router-dom";


function BlogPost() {

    const {id} = useParams();
    const blogPost = posts[id - 1];

    return (
        <main>
            <div className="content-page">

                <h3>{blogPost.title}</h3>

                <p>{blogPost.content}</p>

            </div>
        </main>

    )
}

export default BlogPost;