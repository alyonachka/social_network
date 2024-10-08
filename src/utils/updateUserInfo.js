import { update } from "../redux/slices/loginSlice"
import { USERS } from "../constants/keys"

export const updateUserInfo = (id, getFromLS, dispatch) => {
    const user = getFromLS(USERS).find(user => user.id === id)
    dispatch(update(user))
}