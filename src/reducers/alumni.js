import types from "../constants/actionTypes";

const initialState = {
  data: [
    {
      name: "Cynthia Anderson",
      image:
        "https://images.pexels.com/photos/864937/pexels-photo-864937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      degree: "MESW",
      graduation_year: 2018,
      company: "Microsoft",
      location: {
        city: "Porto",
        country: "Portugal",
        lat: 41.1717237,
        lng: -8.6435591
      }
    },
    {
      name: "Constance Erickson",
      image:
        "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      degree: "MIEIC",
      graduation_year: 2008,
      company: "Google",
      location: {
        city: "Moscow",
        country: "Russia",
        lat: 55.5807481,
        lng: 36.825142
      }
    },
    {
      name: "Wendell Crowley",
      image:
        "https://images.pexels.com/photos/1680317/pexels-photo-1680317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      degree: "MIEIC",
      graduation_year: 2006,
      company: "Airbnb",
      location: {
        city: "Tibete",
        country: "China",
        lat: 34.4184091,
        lng: 86.0758026
      }
    },
    {
      name: "Patrick Wilson",
      image:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      degree: "MESW",
      graduation_year: 2017,
      company: "Tesla",
      location: {
        city: "New Jersey",
        country: "USA",
        lat: 40.6971494,
        lng: -74.2598616
      }
    },
    {
      name: "Corey Soule",
      image:
        "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      degree: "MIEIC",
      graduation_year: 2003,
      company: "Amazon",
      location: {
        city: "Rio de Janeiro",
        country: "Brasil",
        lat: -22.9140693,
        lng: -43.5860668
      }
    },
    {
      name: "Kathy Ross",
      image:
        "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      degree: "MESW",
      graduation_year: 2018,
      company: "Netflix",
      location: {
        city: "Cairo",
        country: "Egypt",
        lat: 30.0594838,
        lng: 31.2234449
      }
    }
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
        data: action.payload.data,
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
