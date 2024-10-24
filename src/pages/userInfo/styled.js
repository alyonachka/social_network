import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ProfileWrapper = styled.div`
    display: flex;
    gap: 50px;
    max-width: 600px;
`

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: larger;
    gap: 30px;
`

export const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
`