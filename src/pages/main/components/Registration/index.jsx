import { useState } from "react";
import { USERS } from "../../../../constants/keys";

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
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Имя"
                name="username"
                onChange={onChange}
            />
            <input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={onChange}
            />
            <input
                type="password"
                placeholder="Пароль"
                name="password"
                onChange={onChange}
            />
            <button type="onsubmit">Зарегистрироваться</button>
        </form>
    );
};
