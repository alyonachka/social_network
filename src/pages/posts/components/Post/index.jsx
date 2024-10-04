import { useState } from "react";
import * as SC from "./styled";
import { Comments } from "./components/Comments";
import { AddCommentForm } from "./components/AddCommentForm";

export const Post = ({ post, getFromLS, setToLS }) => {
    const [addComment, setAddComment] = useState(false);

    return (
        <SC.Post>
            <SC.Header>
                <SC.Icon src="/default-user-photo.png" alt="User photo" />
                <SC.MainInfo>
                    <SC.Author>{post.author.username}</SC.Author>
                    <SC.Title>{post.title}</SC.Title>
                </SC.MainInfo>
            </SC.Header>
            <SC.Body>
                <div>{post.content}</div>
            </SC.Body>
            <img
                src="/comment-icon.png"
                width="20px"
                onClick={() => setAddComment(!addComment)}
                alt="Comment icon"
            />
            {post.comments.length > 0 && <Comments post={post} />}
            {addComment && (
                <>
                    {post.comments.length === 0 && <hr />}
                    <AddCommentForm
                        post={post}
                        setAddComment={setAddComment}
                        getFromLS={getFromLS}
                        setToLS={setToLS}
                    />
                </>
            )}
        </SC.Post>
    );
};
