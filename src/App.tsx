import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchComments} from "./store/reducers/ActionCreators";


const App: FC = () => {

    const {comments, isLoading, error} =  useAppSelector(state => state.comment)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchComments())
    }, [])
    return(
        <div >
            {isLoading && <h2>Загрузка ...</h2>}
            {error && <h2>Ошибка при загрузке коментариев</h2>}
            {}
            {
                comments.map(comment => <div
                className="comment"
                key={comment.id}
            >
                id: {comment.id}
                <br/>
                email: {comment.email}
                <br/>
                <p>{comment.body}</p>
            </div>)}
        </div>
    )
}

export default App;
