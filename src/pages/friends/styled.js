import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 50px;
    align-items: flex-start;
`

export const FriendsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    width: 100%;
    padding: 30px;
    border: 1px solid #e3e3e3;
    border-radius: 20px;
    background: #f3efef;
`

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    width: 22rem;
    background-color: #f7f7f7;
    border-left: solid 1px #e3e3e3;
    border-radius: 20px;
    padding: 2rem;
    list-style: none;
    cursor: pointer;
`

export const MenuItem = styled.li`
    white-space: pre;
    padding: 0.5rem;
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
    gap: 1rem;

    &:hover {
        background: #e3e3e3;
    }

    
    &:active {
        background: hsl(224, 98%, 58%);
        color: white;
    }

    &.active {
        background: #e3e3e3;
    }
`
