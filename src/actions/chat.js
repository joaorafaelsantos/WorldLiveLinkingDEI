import types from '../constants/actionTypes';

export function updateChatUser(data) {
    return {
        type: types.CHAT_USER_UPDATE,
        data
    };
 }