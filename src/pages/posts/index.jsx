import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { POSTS } from "../../constants/keys";
import * as SC from "./styled";
import { Post } from "./components/Post";
import { useSelector } from "react-redux";
import { AddPostForm } from "./components/AddPostForm";

export const PostsPage = () => {
    const { getFromLS, setToLS } = useLocalStorage();
    const [posts, setPosts] = useState(null);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        setPosts(getFromLS(POSTS));
    }, [getFromLS]);

    return (
        <>
            <SC.Wrapper>
                <AddPostForm
                    getFromLS={getFromLS}
                    setToLS={setToLS}
                    posts={posts}
                    setPosts={setPosts}
                />
                <SC.PostsWrapper>
                    {posts
                        ?.filter(
                            (item) =>
                                item.visibility === "all" ||
                                user.friends.find(
                                    (friend) => friend.id === item.author.id
                                )
                        )
                        ?.map((post) => (
                            <Post
                                key={post.id}
                                post={post}
                                getFromLS={getFromLS}
                                setToLS={setToLS}
                                setPosts={setPosts}
                            />
                        ))}
                </SC.PostsWrapper>
            </SC.Wrapper>
        </>
    );
};
