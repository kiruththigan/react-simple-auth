import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: { email: '', loggedIn: false, token: '' } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state, action) => {
            state.value = { email: '', loggedIn: false, token: '' }
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer