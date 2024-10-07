import { PeopleWrapper } from "../../../../components/UI/PeopleTemplate";
import { USERS } from "../../../../constants/keys";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

export const FollowersList = ({ followers, id, updateUserInfo }) => {
    const { getFromLS, setToLS } = useLocalStorage();

    const onAcceptFollower = (followerId) => {
        const users = getFromLS(USERS);
        const follower = users.find((person) => person.id === followerId);
        const user = users.find((person) => person.id === id);

        user.friends.push({
            id: follower.id,
            username: follower.username,
        });
        user.followers = user.followers.filter(
            (person) => person.id !== followerId
        );

        follower.following = follower.following.filter(
            (person) => person.id !== user.id
        );
        follower.friends.push({
            id: user.id,
            username: user.username,
        });

        setToLS(USERS, users);
        updateUserInfo();
    };

    return (
        <>
            <PeopleWrapper
                people={followers}
                deleteFlag={false}
                btnContent="Принять заявку в друзья"
                textForNoData="Нет активных подписок на вас"
                onBtnClick={onAcceptFollower}
            />
        </>
    );
};
