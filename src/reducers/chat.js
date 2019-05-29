import types from "../constants/actionTypes";

const initialState = {
  data: "0"
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case types.CHAT_USER_UPDATE:
     return {
       ...state,
       data: action.data,
       error: false
     };
    default:
      return state;
  }
}
