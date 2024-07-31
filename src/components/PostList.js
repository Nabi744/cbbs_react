import React from 'react';
import Post from './Post';

const PostList = ({ posts, onLike, onDislike }) => {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} onLike={onLike} onDislike={onDislike} />
            ))}
        </div>
    );
};

export default PostList;
