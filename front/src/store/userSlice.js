import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
	name: "user",
	initialState: { value: false },
	reducers: {
		login: (state) => {
			state.value = true;
		},
		logout: (state) => {
			state.value = false;
		},
	},
});

export const { login, logout } = user.actions;

export const selectUserState = (state) => state.user.value;

export default user.reducer;
