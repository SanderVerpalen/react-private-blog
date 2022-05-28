import React from 'react';
import blogs from '../data/posts.json'
import {Link} from "react-router-dom";

function BlogPosts() {
    return (
        <main>
            <div className="content-page">

                <h1>Blogposts</h1>

                <ul className="link-list">
                    {blogs.map((blog) =>
                        <li key={blog.id}><Link
                            to={"/blogposts/" + blog.id}
                            className="link"
                        >
                            {blog.id} {blog.title}
                        </Link></li>)}
                </ul>

            </div>
        </main>
    )
}

export default BlogPosts;