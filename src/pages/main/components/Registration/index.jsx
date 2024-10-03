import { useState } from "react";
import { USERS } from "../../../../constants/keys";
import { Input } from "../../../../components/UI/Input";
import { Button } from "../../../../components/UI/Button";
import { Form } from "../../../../components/UI/Form";

export const Registration = ({ users, setToLS }) => {
    const [user, setUser] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        if (!user.username || !user.email || !user.password) {
            alert("Заполнните все поля");
            return;
        }

        if (users.find((item) => item.email === user.email)) {
            alert("Пользователь с такой почтой уже существует");
            return;
        }

        const newUser = {
            ...user,
            id: Date.now(),
            role: "user",
            friends: [],
            followers: [],
            following: [],
        };

        setToLS(USERS, [...users, newUser]);

        alert("Вы успешно зарегистрировались!");
    };

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Form onSubmit={onSubmit}>
            <Input
                type="text"
                placeholder="Имя"
                name="username"
                onChange={onChange}
            />
            <Input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={onChange}
            />
            <Input
                type="password"
                placeholder="Пароль"
                name="password"
                onChange={onChange}
            />
            <Button type="onsubmit" content="Зарегистрироваться" />
        </Form>
    );
};
