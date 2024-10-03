import { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { USERS } from "../../constants/keys";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import defaultUsers from "../../defaultUsers.json";
import { Button } from "../../components/UI/Button";
import * as SC from "./styled";

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
        <SC.Container>
            <SC.Menu>
                <Button onClick={() => setLogin(true)} content="Вход" />
                <Button onClick={() => setLogin(false)} content="Регистрация" />
            </SC.Menu>
            {login ? (
                <Login users={users} />
            ) : (
                <Registration users={users} setToLS={setToLS} />
            )}
        </SC.Container>
    );
};
