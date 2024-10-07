import * as SC from "./styled";
import { Button } from "../Button";

export const PeopleWrapper = ({
    people,
    deleteFlag,
    btnContent,
    textForNoData,
    onBtnClick,
}) => {
    if (!people) return <>Loading...</>;
    return (
        <>
            {people.length === 0 && <div>{textForNoData}</div>}
            {people.map((person) => (
                <SC.FriendWrapper key={person.id}>
                    <SC.FriendAvatar
                        src="/default-user-photo.png"
                        alt="People avatar"
                    />
                    <SC.InfoBlock>
                        <div>{person.username}</div>
                        <Button
                            deleteFlag={deleteFlag}
                            content={btnContent}
                            onClick={() => onBtnClick(person.id)}
                        />
                    </SC.InfoBlock>
                </SC.FriendWrapper>
            ))}
        </>
    );
};
