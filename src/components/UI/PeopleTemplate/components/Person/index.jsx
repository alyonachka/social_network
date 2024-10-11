import * as SC from "./styled";
import { Button } from "../../../AppButton";
import { useEffect, useState } from "react";
import { USERS } from "../../../../../constants/keys";

export const Person = ({
    person,
    deleteFlag,
    btnContent,
    onBtnClick,
    getFromLS,
}) => {
    const [personAvatar, setPersonAvatar] = useState();

    useEffect(() => {
        if (person.img) {
            setPersonAvatar(person.img);
            return;
        }

        const users = getFromLS(USERS);
        const user = users.find((user) => user.id === person.id);
        setPersonAvatar(user.img);
    }, [person.img, person.id, getFromLS]);

    return (
        <SC.FriendWrapper key={person.id}>
            <SC.FriendAvatar src={personAvatar} alt="Person avatar" />
            <SC.InfoBlock>
                <div>{person.username}</div>
                <Button
                    deleteFlag={deleteFlag}
                    content={btnContent}
                    onClick={() => onBtnClick(person.id)}
                />
            </SC.InfoBlock>
        </SC.FriendWrapper>
    );
};
