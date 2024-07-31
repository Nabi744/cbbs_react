import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { text, image, comments: [], likes: 0, dislikes: 0 };
        addPost(newPost);
        setText('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your post..."
      />
            <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
            <button type="submit">Post</button>
        </form>
    );
};

export default PostForm;
