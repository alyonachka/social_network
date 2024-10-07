import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    // user: {
    //     id: 1,
    //     username: "Alyonachka",
    //     email: "alena.chadina2016@yandex.ru",
    //     password: "123",
    //     role: "user",
    //     friends: [
    //         {
    //             "id": 2,
    //             "username": "FriendUser",
    //         }
    //     ],
    //     followers: [

    //     ],
    //     following: [
    //         {
    //             "id": 3,
    //             "username": "AdminUser",
    //         }
    //     ]
    // }
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer