import styled from "styled-components";
import { Button } from "../UI/AppButton";

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 20px;
    background: #f7f7f7;
    padding: 20px;
`

export const Header = styled.div`
    display: flex;
    gap: 30px;
    position: relative;
`

export const Icon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid;
`

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Author = styled.span`
    color: #3992ff;
`

export const Title = styled.span`
    font-weight: 600;
`

export const Body = styled.div`

`

export const DeletePostBtn = styled(Button)`
    height: 40px;
    width: 40px;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
`