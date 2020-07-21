import {CHANGE_POST, CREATE_POST, DELETE_POST} from "./Types";

export function createPost(post){
    return{
        type: CREATE_POST,
        payload: post
    }
}

export function deletePost(id) {
    return{
        type: DELETE_POST,
        payload: {id}
    }
}

export function changePost(id,value) {
    return{
        type: CHANGE_POST,
        payload: {id, value}
    }
}