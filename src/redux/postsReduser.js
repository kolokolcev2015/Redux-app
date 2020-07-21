import {CHANGE_POST, CREATE_POST, DELETE_POST} from "./Types";

const initialState ={
    posts: [{ id: '1',title: '1'},
        { id: '2',title: '2'},
        { id: '3',title: '3'}
    ]
}

export const postsReducer = (state = initialState,action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat([{id: action.payload.id, title: action.payload.title}])}
        case DELETE_POST:
            return {posts: state.posts.filter(post => post.id !== action.payload.id) }
        case CHANGE_POST:
            return {posts: state.map(todo => todo.id !== action.payload.id ? todo : {...todo,title: action.payload.value}) }
        default: return state
    }
    return state
}