import types from "../constants/actionTypes";

const initialState = {
  data: {
    isAuth: false
  }
};

export default function alumni(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.AUTH_FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: false
      };
    case types.AUTH_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case types.REGISTER_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.REGISTER_FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: false
      };
    case types.REGISTER_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case types.AUTH_RESET:
      return {
        data: initialState.data,
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
}
