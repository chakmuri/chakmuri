import { createSlice } from "@reduxjs/toolkit";

export const likeClub = createSlice({
	name: "likedClubs",
	initialState: { value: [] },
	reducers: {
		like: (state, action) => {
			state.likedClubs.push(action.payload);
		},
		dislike: (state, action) => {
			state.likedClubs.slice(action.payload, 1);
		},
	},
});

export const { like, dislike } = likeClub.actions;

export const selectLikedClubs = (state) => state.like.value;

export default likeClub.reducer;
