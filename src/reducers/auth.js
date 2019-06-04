import types from "../constants/actionTypes";

const initialState = {
  data: {
    isAuth: false,
    profile: {
      birthdate: "",
      company: {
        email: "",
        job: "",
        name: "",
        startDate: ""
      },
      course: {
        endDate: "",
        name: "",
        startDate: "",
        university: ""
      },
      email: "",
      id: "",
      location: {
        city: "",
        latitude: "",
        location: "",
        longitude: ""
      },
      isadmin: false,
      name: "",
      password: "",
      username: ""
    }
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
        data: {...state.data, ...action.data, profile: {...state.data.profile, ...action.data.profile}},
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
        data: {...state.data, ...action.data},
        isFetching: false,
        error: false
      };
    case types.REGISTER_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case types.PROFILE_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        data: {...state.data, ...action.data, profile: {...state.data.profile, ...action.data.profile, isadmin: action.data.profile.isadmin==='true'}},
        isFetching: false,
        error: false
      };
    case types.PROFILE_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case types.PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        data: {...state.data, ...action.data, profile: {...state.data.profile, ...action.data.profile}},
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
