import types from "../constants/actionTypes";

const initialState = {
  data: [
    {
      name: "",
      location: {
          location: "",
          city: "",
          latitude: "",
          longitude: ""
      },
      company: {
          name: "",
          email: "",
          job: "",
          startDate: ""
      },
      username: null,
      password: null,
      birthdate: null,
      course: {
          name: "",
          university: "",
          startDate: "",
          endDate: ""
      },
      email: "",
      id: ""
  },
  ]
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
        isFetching: false,
        error: false
      };
    case types.ALUMNI_RESET:
      return {
        data: initialState.data,
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
}
