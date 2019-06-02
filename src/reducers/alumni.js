import types from "../constants/actionTypes";

const initialState = {
  filtered: [],
  data: []
};

export default function alumni(state = initialState, action) {
  switch (action.type) {
    case types.ALUMNI_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.ALUMNI_FETCH_SUCCESS:
      return {
        ...state,
        //   id: action.payload.id,
        data: action.data,
        filtered: action.data.map(data => data.id),
        isFetching: false,
        //   lastUpdated: action.payload.receivedAt,
        error: false
      };
    case types.ALUMNI_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case types.ALUMNI_UPDATE:
      return {
        ...state,
        data: action.data,
        filtered: action.data.map(alumni => alumni.id),
        isFetching: false,
        error: false
      };
    case types.ALUMNI_FILTER_UPDATE:
      return {
        ...state,
        filtered: action.filtered,
        isFetching: false,
        error: false
      };
    case types.ALUMNI_RESET:
      return {
        ...state,
        filtered: initialState.filtered,
        data: initialState.data,
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
}
