import React from 'react';

const Post = ({ post, onLike, onDislike }) => {
    return (
        <div className="post">
            {post.image && <img src={post.image} alt="Post Image" />}
            <p>{post.text}</p>
            <div>
                <button onClick={() => onLike(post.id)}>Like ({post.likes})</button>
                <button onClick={() => onDislike(post.id)}>Dislike ({post.dislikes})</button>
            </div>
            <div>
                <h3>Comments</h3>
                {post.comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </div>
        </div>
    );
};

export default Post;
