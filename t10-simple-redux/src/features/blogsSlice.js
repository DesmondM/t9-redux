//q: Can you create a slice with multiple reducers?
//q: Can you create a slice with multiple actions?

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs: [],
    status: 'idle',
    error: null
}

//q: What is the next step after creating a slice?

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        blogsLoading(state, action) {
            if (state.status === 'idle') {
                state.status = 'pending'
            }
        },
        blogsReceived(state, action) {
            if (state.status === 'pending') {
                state.status = 'idle'
                state.blogs = action.payload
            }
        },
        blogsRequestFailed(state, action) {
            if (state.status === 'pending') {
                state.status = 'idle'
                state.error = action.payload
            }
        }
    }
})

export const { blogsLoading, blogsReceived, blogsRequestFailed } = blogsSlice.actions
export default blogsSlice.reducer
