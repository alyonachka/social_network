import { useEffect, useState } from "react";
import * as SC from "./styled";
import { Comments } from "./components/Comments";
import { AddCommentForm } from "./components/AddCommentForm";
import { POSTS, USERS } from "../../constants/keys";

export const Post = ({ post, getFromLS, setToLS, setPosts, deleteFlag }) => {
    const [addComment, setAddComment] = useState(false);
    const [userAvatar, setUserAvatar] = useState("/default-user-photo.png");

    useEffect(() => {
        const users = getFromLS(USERS);
        const user = users.find((user) => user.id === post.author.id);
        setUserAvatar(user.img);
    }, [getFromLS, post.author.id]);

    const onDeletePost = (postId) => {
        const result = window.confirm("Вы уверены что хотите удалить пост?");

        if (!result) return;

        const posts = getFromLS(POSTS);
        const filteredPosts = posts.filter((post) => post.id !== postId);
        setPosts(filteredPosts);
        setToLS(POSTS, filteredPosts);
    };

    return (
        <SC.Post>
            <SC.Header>
                <SC.Icon src={userAvatar} alt="User photo" />
                <SC.MainInfo>
                    <SC.Author>{post.author.username}</SC.Author>
                    <SC.Title>{post.title}</SC.Title>
                </SC.MainInfo>
                {deleteFlag && (
                    <SC.DeletePostBtn
                        content="X"
                        deleteFlag={true}
                        onClick={() => onDeletePost(post.id)}
                    />
                )}
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
            {post.comments.length > 0 && (
                <Comments post={post} getFromLS={getFromLS} />
            )}
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
