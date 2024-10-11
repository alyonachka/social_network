import * as SC from "./styled";

export const Button = ({ content, handler, deleteFlag, ...props }) => {
    return (
        <>
            {deleteFlag ? (
                <SC.DeleteBtn onClick={handler} {...props}>
                    {" "}
                    {content}
                </SC.DeleteBtn>
            ) : (
                <SC.Button onClick={handler} {...props}>
                    {content}
                </SC.Button>
            )}
        </>
    );
};
