import { useSelector } from "react-redux";
import * as SC from "./styled";
import { Post } from "../../components/Post";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { POSTS } from "../../constants/keys";

export default function UserInfoPage() {
    const user = useSelector((state) => state.auth.user);
    const { setToLS, getFromLS } = useLocalStorage();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getFromLS(POSTS));
    }, [getFromLS]);

    const role = user.role === "user" ? "пользователь" : "администратор";
    return (
        <SC.Wrapper>
            <SC.ProfileWrapper>
                <SC.Avatar
                    src={user.img || "/default-user-photo.png"}
                    alt="user photo"
                />
                <SC.Info>
                    <div>
                        Имя: <b>{user.username}</b>
                    </div>
                    <div>Почта: {user.email}</div>
                    <div>Права: {role}</div>
                </SC.Info>
            </SC.ProfileWrapper>
            <h2>Мои посты</h2>
            <SC.PostsWrapper>
                {posts
                    .filter((post) => post.author.id === user.id)
                    .map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                            getFromLS={getFromLS}
                            setToLS={setToLS}
                            setPosts={setPosts}
                            deleteFlag={true}
                        />
                    ))}
            </SC.PostsWrapper>
        </SC.Wrapper>
    );
}
