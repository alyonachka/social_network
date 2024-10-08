import * as SC from "./styled";
import { Button } from "../../../../components/UI/Button";
import { Form } from "../../../../components/UI/Form";
import { Input } from "../../../../components/UI/Input";
import { Textarea } from "../../../../components/UI/Textarea";
import { useState } from "react";
import { useSelector } from "react-redux";
import { POSTS } from "../../../../constants/keys";

const defaultForm = {
    title: "",
    content: "",
    visibility: "all",
};

export const AddPostForm = ({ getFromLS, setToLS, posts, setPosts }) => {
    const [formVisibility, setFormVisibility] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const [newPost, setNewPost] = useState(defaultForm);

    const btnContent = formVisibility ? "Скрыть форму" : "Создать пост";

    const onChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!newPost.title || !newPost.content) {
            alert("Введите и заголовок и тело поста");
            return;
        }

        const newObj = {
            id: Date.now(),
            author: {
                id: user.id,
                username: user.username,
            },
            ...newPost,
            comments: [],
        };

        setToLS(POSTS, [newObj, ...posts]);
        alert("Пост создан");
        setNewPost(defaultForm);
        setPosts(getFromLS(POSTS));
    };

    return (
        <>
            <Button
                content={btnContent}
                onClick={() => setFormVisibility(!formVisibility)}
            />
            {formVisibility && (
                <Form onSubmit={onSubmit}>
                    <SC.FieldSet>
                        <legend>Видимость поста</legend>
                        <div>
                            <SC.CheckInput
                                type="radio"
                                id="all"
                                name="visibility"
                                value="all"
                                checked={newPost.visibility === "all"}
                                onChange={(e) => {
                                    setNewPost({
                                        ...newPost,
                                        visibility: e.target.value,
                                    });
                                }}
                            />
                            <label htmlFor="all">All</label>
                        </div>
                        <div>
                            <SC.CheckInput
                                type="radio"
                                id="friends"
                                name="visibility"
                                value="friends"
                                checked={newPost.visibility === "friends"}
                                onChange={(e) => {
                                    setNewPost({
                                        ...newPost,
                                        visibility: e.target.value,
                                    });
                                }}
                            />
                            <label htmlFor="friends">Only friends</label>
                        </div>
                    </SC.FieldSet>
                    <Input
                        placeholder="Title"
                        onChange={onChange}
                        name="title"
                        value={newPost.title}
                    />
                    <Textarea
                        placeholder="Content"
                        onChange={onChange}
                        name="content"
                        value={newPost.content}
                    />
                    <Button content="Create post" type="submit" />
                </Form>
            )}
        </>
    );
};
