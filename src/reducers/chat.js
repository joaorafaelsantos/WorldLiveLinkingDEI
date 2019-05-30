import types from "../constants/actionTypes";

const initialState = {
  data: "0",
  users: ["array inicial"]
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case types.CHAT_USER_UPDATE:
     return {
       ...state,
       data: action.data,
       error: false
     };

     case types.ARRAY_USERS:
     return {
       ...state,
       users: action.users,
       error: false
     };
    default:
      return state;
  }
}
