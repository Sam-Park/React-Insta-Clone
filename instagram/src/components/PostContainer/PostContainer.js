import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = ({ postData }) => (
    <div className="post-container">
        <div className="thumbnail">
            <img src={postData.thumbnailUrl} />
            <span><b>{postData.username}</b></span>
        </div>
        <div className="image">
            <img src={postData.imageUrl} />
        </div>
        <CommentSection comments={postData.comments} /> 
    </div>
);

export default PostContainer;