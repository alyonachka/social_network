import { useCallback } from "react";

export const useLocalStorage = () => {

    const setToLS = useCallback((key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [])

    const getFromLS = useCallback((key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            throw new Error(e)
        }
    }, [])

    const removeFromLS = (key, value) => {
        const data = getFromLS(key);

        setToLS(key, [
            ...data.filter((el) => value.id !== el.id),
        ]);
    };

    return {
        setToLS,
        getFromLS,
        removeFromLS
    }
}