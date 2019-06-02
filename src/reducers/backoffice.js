import types from "../constants/actionTypes";

const initialState = {
  data: []
};

export default function backoffice(state = initialState, action) {
  switch (action.type) {
    case types.ALUMNI_PENDING_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.ALUMNI_PENDING_FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: false
      };
    case types.ALUMNI_PENDING_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case types.VALIDATE_ALUMNI_SUCCESS:
      return {
        data: state.data.filter(alumni => alumni.id !== action.data.id),
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
