'use client'

import React, { use } from 'react';

const Posts = ({ postsPromise }) => {

    const posts = use(postsPromise);
    console.log(posts, "posts data");

    return (
        <div>
            <h2>The Posts: {posts.length}</h2>
        </div>
    );
};

export default Posts;