import {combineReducers, configureStore} from "@reduxjs/toolkit";
import comments from "./reducers/CommentsSlice";


const rootReducer = combineReducers({
    comment: comments
})

export const SetupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof SetupStore>
export type AppDispatch = AppStore['dispatch']