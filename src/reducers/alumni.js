import types from "../constants/actionTypes";

const initialState = {
  data: [
    {
      name: "Brian Eno",
      location: {
          location: "1 Avenue de Lafayette",
          city: "Boston",
          latitude: "42.3534266\" N",
          longitude: "71.0608761\" W"
      },
      company: {
          name: "altice",
          email: "email@altice.com",
          job: "taxista",
          startDate: "19700101"
      },
      username: null,
      password: null,
      birthdate: null,
      course: {
          name: "name",
          university: "university",
          startDate: "null",
          endDate: "null"
      },
      email: "email@domain.com",
      id: "5ce58fdcd8b6d3e887adf7d4"
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
