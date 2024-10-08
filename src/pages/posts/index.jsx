import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { POSTS } from "../../constants/keys";
import * as SC from "./styled";
import { Post } from "../../components/Post";
import { useSelector } from "react-redux";
import { AddPostForm } from "./components/AddPostForm";

export const PostsPage = () => {
    const { getFromLS, setToLS } = useLocalStorage();
    const [posts, setPosts] = useState(null);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const postsFromLS = getFromLS(POSTS);

        if (user.role === "user") {
            const filteredPosts = postsFromLS.filter(
                (item) =>
                    item.visibility === "all" ||
                    user.friends.find((friend) => friend.id === item.author.id)
            );

            setPosts(filteredPosts);
            return;
        }

        setPosts(postsFromLS);
    }, [getFromLS, user.friends, user.role]);

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
                    {posts?.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                            getFromLS={getFromLS}
                            setToLS={setToLS}
                            setPosts={setPosts}
                            deleteFlag={user.role === "admin" ? true : false}
                        />
                    ))}
                </SC.PostsWrapper>
            </SC.Wrapper>
        </>
    );
};
