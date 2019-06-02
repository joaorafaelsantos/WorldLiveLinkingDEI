import types from '../constants/actionTypes';
import { config } from '../config';

export function alumniHasFailed(bool) {
    return {
        type: types.ALUMNI_FETCH_FAILURE,
        error: bool
    };
}

export function alumniIsFetching(bool) {
    return {
        type: types.ALUMNI_FETCH_REQUEST,
        isFetching: bool
    };
}

export function alumniFetchDataSuccess(data) {
    return {
        type: types.ALUMNI_FETCH_SUCCESS,
        data
    };
}

export function alumniFetchData() {
    return (dispatch) => {
        dispatch(alumniIsFetching(true));

        fetch(`${config.BASE_URL}/alumni`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(alumniIsFetching(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(alumniFetchDataSuccess(items)))
            .catch(() => dispatch(alumniHasFailed(true)));
    };
}

export function updateAlumni(data) {
    return {
        type: types.ALUMNI_UPDATE,
        data
    };
}

export function updateAlumniFilter(data) {
    return {
        type: types.ALUMNI_FILTER_UPDATE,
        filtered: data
    };
}

export function resetAlumni() {
    return {
        type: types.ALUMNI_RESET,
    };
}