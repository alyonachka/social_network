import { PeopleWrapper } from "../../../../components/UI/PeopleTemplate";
import { USERS } from "../../../../constants/keys";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { useSelector } from "react-redux";

export const PeopleList = ({ people, updateUserInfo }) => {
    const { getFromLS, setToLS } = useLocalStorage();
    const { id } = useSelector((state) => state.auth.user);

    const subscribePerson = (personId) => {
        const users = getFromLS(USERS);
        const newFriend = users.find((user) => user.id === personId);
        const user = users.find((person) => person.id === id);

        const updatedUser = {
            ...user,
            following: [
                ...user.following,
                { id: newFriend.id, username: newFriend.username },
            ],
        };

        const updatedNewFriend = {
            ...newFriend,
            followers: [
                ...newFriend.followers,
                { id: user.id, username: user.username },
            ],
        };

        const updatedUsers = users.map((person) =>
            person.id === updatedUser.id
                ? updatedUser
                : person.id === updatedNewFriend.id
                ? updatedNewFriend
                : person
        );

        setToLS(USERS, updatedUsers);

        updateUserInfo();
    };

    return (
        <PeopleWrapper
            people={people}
            deleteFlag={false}
            btnContent="Отправить заявку в друзья"
            textForNoData="Нет людей"
            onBtnClick={subscribePerson}
        />
    );
};
