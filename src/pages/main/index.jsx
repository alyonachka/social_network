import "./styles.css";
import { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { USERS } from "../../constants/keys";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import defaultUsers from "../../defaultUsers.json";

export const MainPage = () => {
    const [users, setUsers] = useState();
    const [login, setLogin] = useState(true);
    const { getFromLS, setToLS } = useLocalStorage();

    useEffect(() => {
        if (!getFromLS(USERS)) {
            setToLS(USERS, defaultUsers.users);
        }

        setUsers(getFromLS(USERS));
    }, [setToLS, getFromLS]);

    return (
        <div className="container">
            <nav>
                <button onClick={() => setLogin(true)}>Вход</button>
                <button onClick={() => setLogin(false)}>Регистрация</button>
            </nav>
            {login ? (
                <Login users={users} />
            ) : (
                <Registration users={users} setToLS={setToLS} />
            )}
        </div>
    );
};
