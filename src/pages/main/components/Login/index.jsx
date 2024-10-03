import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../../../redux/slices/loginSlice";

export const Login = ({ users }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!user.password || !user.email) {
            alert("Заполнните все поля");
            return;
        }

        const foundUser = users.find((item) => item.email === user.email);
        if (!foundUser) {
            alert("Нет такого пользователя");
            return;
        }

        if (foundUser.password !== user.password) {
            alert("Пароль неверный");
            return;
        }

        dispatch(login(foundUser));
        navigate(`/user/${foundUser.id}/`);
    };

    return (
        <form onSubmit={onSubmit}>
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
            <button type="onsubmit">Войти</button>
        </form>
    );
};
