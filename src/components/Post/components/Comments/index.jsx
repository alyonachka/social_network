import * as SC from "./styled";
import { useState, useEffect } from "react";
import { USERS } from "../../../../constants/keys";
import { Comment } from "./components/Comment";

export const Comments = ({ post, getFromLS }) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        setUsers(getFromLS(USERS));
    }, [getFromLS]);

    return (
        <>
            <hr />
            <SC.Comments>
                {post.comments?.map((comment) => (
                    <Comment key={comment.id} comment={comment} users={users} />
                ))}
            </SC.Comments>
        </>
    );
};
