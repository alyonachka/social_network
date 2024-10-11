import * as SC from "./styled";
import { useEffect, useState } from "react";

export const Comment = ({ comment, users }) => {
    const [userAvatar, setUserAvatar] = useState("/default-user-photo.png");

    useEffect(() => {
        if (!users) return;

        const commentAuthor = users.find(
            (user) => user.id === comment.author.id
        );

        setUserAvatar(commentAuthor.img);
    }, [comment.author.id, users]);

    return (
        <SC.Comment key={comment.id}>
            <SC.Icon src={userAvatar} alt="User photo" />
            <SC.MainInfo>
                <div>
                    <b>{comment.author.username}</b>
                </div>
                <div>{comment.content}</div>
            </SC.MainInfo>
        </SC.Comment>
    );
};
