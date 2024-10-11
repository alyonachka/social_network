import { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { USERS, POSTS } from "../../constants/keys";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import defaultUsers from "../../defaultUsers.json";
import defaultPosts from "../../defaultPosts.json";
import { Button } from "../../components/UI/Button";
import * as SC from "./styled";

export const MainPage = () => {
    const [users, setUsers] = useState();
    const [authForm, setAuthFrom] = useState("login");
    const { getFromLS, setToLS } = useLocalStorage();

    useEffect(() => {
        if (!getFromLS(USERS)) {
            setToLS(USERS, defaultUsers.users);
        }

        if (!getFromLS(POSTS)) setToLS(POSTS, defaultPosts.posts);

        setUsers(getFromLS(USERS));
    }, [setToLS, getFromLS]);

    return (
        <SC.Container>
            <SC.Menu>
                <Button onClick={() => setAuthFrom("login")} content="Вход" />
                <Button
                    onClick={() => setAuthFrom("registration")}
                    content="Регистрация"
                />
            </SC.Menu>
            {authForm === "login" ? (
                <Login users={users} />
            ) : (
                <Registration
                    users={users}
                    setUsers={setUsers}
                    setToLS={setToLS}
                />
            )}
        </SC.Container>
    );
};
