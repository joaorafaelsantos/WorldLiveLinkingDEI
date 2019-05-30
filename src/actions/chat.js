import types from '../constants/actionTypes';

export function updateChatUser(data) {
    return {
        type: types.CHAT_USER_UPDATE,
        data
    };
 }

 export function updateArrayUsers(data) {
    return {
        type: types.ARRAY_USERS,
        users: data
    };
 }