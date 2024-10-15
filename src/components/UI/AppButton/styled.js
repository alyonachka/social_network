import styled from "styled-components";

export const Button = styled.button`
    color: #3992ff;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
    background-color: white;
    line-height: 1.5;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6), 0 1px 2px hsla(0, 0%, 0%, 0.2);
    }

    &:active {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.4);
        transform: translateY(1px);
    }
`

export const DeleteBtn = styled(Button)`
    color: #e80c39;

    &:hover {
        background-color: red;
        color: white;
    }
`