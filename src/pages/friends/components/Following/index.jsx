import { PeopleWrapper } from "../../../../components/UI/PeopleTemplate";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { USERS } from "../../../../constants/keys";

export const FollowingList = ({ following, id, updateUserInfo }) => {
    const { getFromLS, setToLS } = useLocalStorage();

    const unSubscribe = (followingId) => {
        const users = getFromLS(USERS);
        const following = users.find((person) => person.id === followingId);
        const user = users.find((person) => person.id === id);

        user.following = user.following.filter(
            (person) => person.id !== followingId
        );

        following.followers = following.followers.filter(
            (person) => person.id !== user.id
        );

        setToLS(USERS, users);
        updateUserInfo();
    };

    return (
        <PeopleWrapper
            people={following}
            deleteFlag={true}
            btnContent="Отписаться от человека"
            textForNoData="Нет активных подписок на людей"
            onBtnClick={unSubscribe}
        />
    );
};
