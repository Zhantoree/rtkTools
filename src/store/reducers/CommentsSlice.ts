import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Comment} from "../../models/Comment";
import {fetchComments} from "./ActionCreators";

interface CommentState {
    comments: Comment[],
    isLoading: boolean,
    error: string;
}

const initialState: CommentState = {
    comments: [],
    isLoading: false,
    error: ''
}

export const CommentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComments.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchComments.fulfilled.type]: (state, action: PayloadAction<Comment[]>) => {
            state.isLoading = false
            state.comments = action.payload
        },
        [fetchComments.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state. error = action.payload
        }
    }
})

export default CommentSlice.reducer;
// export const {commentsFetching, commentsFetchingSuccess, commentsFetchingError} = CommentSlice.actions