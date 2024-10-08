import * as SC from "./styled";

export const Comments = ({ post }) => {
    return (
        <>
            <hr />
            <SC.Comments>
                {post.comments?.map((comment) => (
                    <SC.Comment key={comment.id}>
                        <SC.Icon
                            src="/default-user-photo.png"
                            alt="User photo"
                        />
                        <SC.MainInfo>
                            <div>
                                <b>{comment.author.username}</b>
                            </div>
                            <div>{comment.content}</div>
                        </SC.MainInfo>
                    </SC.Comment>
                ))}
            </SC.Comments>
        </>
    );
};
