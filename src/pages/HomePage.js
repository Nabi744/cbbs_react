import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        post.id = Date.now(); // 유일한 ID 생성
        setPosts([post, ...posts]);
    };

    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const handleDislike = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post
        ));
    };

    return (
        <div>
            <h1>Message Board</h1>
            <PostForm addPost={addPost} />
            <PostList posts={posts} onLike={handleLike} onDislike={handleDislike} />
        </div>
    );
};

export default HomePage;
