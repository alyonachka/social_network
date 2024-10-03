import * as SC from "./styled";

export const Button = ({ content, handler, ...props }) => {
    return (
        <SC.Button onClick={handler} {...props}>
            {content}
        </SC.Button>
    );
};
