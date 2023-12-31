import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", title: "First Post!", content: "Hello! " },
    { id: "1", title: "Second Post", content: "More text" },
    { id: "2", title: "Third Post", content: "More text"}
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);

        }
    }

});
export const selectAllPosts = (state)=>state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;

        
    