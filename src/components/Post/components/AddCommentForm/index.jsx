import * as SC from "./styled";
import { Input } from "../../../UI/Input";
import { Button } from "../../../UI/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import { POSTS } from "../../../../constants/keys";

export const AddCommentForm = ({ post, setAddComment, getFromLS, setToLS }) => {
    const user = useSelector((state) => state.auth.user);
    const [content, setContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!content) {
            alert("Нельзя добавить пустой комментарий");
            return;
        }

        post.comments.push({
            id: Date.now(),
            author: {
                id: user.id,
                username: user.username,
            },
            content,
        });

        const posts = getFromLS(POSTS);

        setToLS(
            POSTS,
            posts.map((item) => {
                if (item.id === post.id) {
                    return post;
                }
                return item;
            })
        );
        setAddComment(false);
    };

    return (
        <SC.AddCommentForm onSubmit={onSubmit}>
            <SC.Icon
                src={user.img || "/default-user-photo.png"}
                alt="User photo"
            />
            <Input
                placeholder="Написать комментарий"
                style={{ width: "100%" }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button content="Send" type="submit" />
        </SC.AddCommentForm>
    );
};
