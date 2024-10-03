import styled from "styled-components";
import { Link } from "react-router-dom";

export const Sidebar = styled.aside`
    width: 22rem;
    background-color: #f7f7f7;
    border-right: solid 1px #e3e3e3;
    padding: 0 2rem;
`

export const NavMenu = styled.nav`
    padding-top: 2rem;
`

export const MyLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

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
`

export const Detail = styled.div`
    flex: 1;
    padding: 2rem 4rem;
`