import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { Person } from "./components/Person";

export const PeopleWrapper = ({
    people,
    deleteFlag,
    btnContent,
    textForNoData,
    onBtnClick,
}) => {
    const { getFromLS } = useLocalStorage();

    if (!people) return <>Loading...</>;

    return (
        <>
            {people.length === 0 && <div>{textForNoData}</div>}
            {people.map((person) => (
                <Person
                    key={person.id}
                    person={person}
                    deleteFlag={deleteFlag}
                    btnContent={btnContent}
                    onBtnClick={onBtnClick}
                    getFromLS={getFromLS}
                />
            ))}
        </>
    );
};
