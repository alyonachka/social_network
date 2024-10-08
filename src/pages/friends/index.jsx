import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { USERS } from "../../constants/keys";
import * as SC from "./styled";
import { FriendsList } from "./components/FriendsList";
import { PeopleList } from "./components/PeopleList";
import { FollowingList } from "./components/Following";
import { FollowersList } from "./components/Followers";
import { filterPeople } from "../../utils/filterPeople";
import { updateUserInfo } from "../../utils/updateUserInfo";

export const FriendsPage = () => {
    const [activeMenu, setActiveMenu] = useState("friends");
    const user = useSelector((state) => state.auth.user);
    const { getFromLS } = useLocalStorage();
    const dispatch = useDispatch();
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const users = getFromLS(USERS);
        const filteredPeople = filterPeople(users, user);
        setPeople(filteredPeople);
    }, [getFromLS, user]);

    const updateUser = () => {
        updateUserInfo(user.id, getFromLS, dispatch);

        const users = getFromLS(USERS);
        const updatedPeople = filterPeople(users, user);
        setPeople(updatedPeople);
    };

    return (
        <SC.Wrapper>
            <SC.FriendsList>
                {activeMenu === "friends" && (
                    <FriendsList
                        friends={user.friends}
                        id={user.id}
                        updateUserInfo={updateUser}
                    />
                )}
                {activeMenu === "following" && (
                    <FollowingList
                        following={user.following}
                        id={user.id}
                        updateUserInfo={updateUser}
                    />
                )}
                {activeMenu === "followers" && (
                    <FollowersList
                        followers={user.followers}
                        id={user.id}
                        updateUserInfo={updateUser}
                    />
                )}
                {activeMenu === "people" && (
                    <PeopleList people={people} updateUserInfo={updateUser} />
                )}
            </SC.FriendsList>
            <SC.Menu>
                <SC.MenuItem
                    data-page="friends"
                    className={"friends" === activeMenu ? "active" : ""}
                    onClick={() => setActiveMenu("friends")}
                >
                    Мои друзья
                </SC.MenuItem>
                <SC.MenuItem
                    data-page="following"
                    className={"following" === activeMenu ? "active" : ""}
                    onClick={() => setActiveMenu("following")}
                >
                    Подписки
                </SC.MenuItem>
                <SC.MenuItem
                    data-page="followers"
                    className={"followers" === activeMenu ? "active" : ""}
                    onClick={() => setActiveMenu("followers")}
                >
                    Подписчики
                </SC.MenuItem>
                <SC.MenuItem
                    data-page="people"
                    className={"people" === activeMenu ? "active" : ""}
                    onClick={() => setActiveMenu("people")}
                >
                    Поиск людей
                </SC.MenuItem>
            </SC.Menu>
        </SC.Wrapper>
    );
};
