import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { USERS } from "../../constants/keys";
import * as SC from "./styled";
import { FriendsList } from "./components/FriendsList";
import { PeopleList } from "./components/PeopleList";
import { FollowingList } from "./components/Following";
import { FollowersList } from "./components/Followers";
import { filterPeople } from "../../utils/filterPeople";

export const FriendsPage = () => {
    const [activeMenu, setActiveMenu] = useState("friends");
    const { id } = useSelector((state) => state.auth.user);
    const { getFromLS } = useLocalStorage();
    const [userInfo, setUserInfo] = useState({});
    const [people, setPeople] = useState([]);

    useEffect(() => {
        setUserInfo(getFromLS(USERS).find((item) => item.id === id));
    }, [getFromLS, id]);

    useEffect(() => {
        const users = getFromLS(USERS);
        const currentUser = users.find((item) => item.id === id);
        setUserInfo(currentUser);

        const filteredPeople = filterPeople(users, currentUser, id);
        setPeople(filteredPeople);
    }, [getFromLS, id]);

    const updateUserInfo = () => {
        const users = getFromLS(USERS);
        const updatedUser = users.find((item) => item.id === id);
        setUserInfo(updatedUser);

        const updatedPeople = filterPeople(users, updatedUser, id);
        setPeople(updatedPeople);
    };

    return (
        <SC.Wrapper>
            <SC.FriendsList>
                {activeMenu === "friends" && (
                    <FriendsList
                        friends={userInfo.friends}
                        id={id}
                        updateUserInfo={updateUserInfo}
                    />
                )}
                {activeMenu === "following" && (
                    <FollowingList
                        following={userInfo.following}
                        id={id}
                        updateUserInfo={updateUserInfo}
                    />
                )}
                {activeMenu === "followers" && (
                    <FollowersList
                        followers={userInfo.followers}
                        id={id}
                        updateUserInfo={updateUserInfo}
                    />
                )}
                {activeMenu === "people" && (
                    <PeopleList
                        people={people}
                        updateUserInfo={updateUserInfo}
                    />
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
