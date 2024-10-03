import * as SC from "./styled";

export const Form = ({ onSubmit, children }) => {
    return <SC.Form onSubmit={onSubmit}>{children}</SC.Form>;
};
