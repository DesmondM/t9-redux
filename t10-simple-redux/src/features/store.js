import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import multiplesReducer from "./multiplesSlice";
import postsReducer from "./posts/postsSlice";

//q: How do import the blogSlice?
export default configureStore({
    reducer: {
        counter: counterReducer,
        multiples: multiplesReducer,
        posts: postsReducer
        
    }
});