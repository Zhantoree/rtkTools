import {Comment} from "../../models/Comment";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchComments = async (dispatch: AppDispatch) => {
//     try {
//         dispatch(commentsFetching)
//         const response = (await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?_limit=10'))
//         dispatch(commentsFetchingSuccess(response.data))
//     } catch (e: any) {
//         dispatch(commentsFetchingError(e.message))
//     }
// }

export const fetchComments = createAsyncThunk(
    'comment/fetchComments',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?_limit=10')
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue("Error when loading comments")
        }
    }
)

