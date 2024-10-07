import { PeopleWrapper } from "../../../../components/UI/PeopleTemplate";
import { USERS } from "../../../../constants/keys";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

export const FriendsList = ({ friends, id, updateUserInfo }) => {
    const { getFromLS, setToLS } = useLocalStorage();

    const deleteFriend = (friendId) => {
        const users = getFromLS(USERS);
        const friend = users.find((person) => person.id === friendId);
        const user = users.find((person) => person.id === id);

        user.friends = user.friends.filter((person) => person.id !== friendId);
        user.followers.push({
            id: friend.id,
            username: friend.username,
        });

        friend.friends = friend.friends.filter(
            (person) => person.id !== user.id
        );
        friend.following.push({
            id: user.id,
            username: user.username,
        });

        setToLS(USERS, users);
        updateUserInfo();
    };

    return (
        <PeopleWrapper
            people={friends}
            deleteFlag={true}
            btnContent="Убрать из друзей"
            textForNoData="Пока что нет друзей, добавьте кого-нибудь!"
            onBtnClick={deleteFriend}
        />
    );
};
