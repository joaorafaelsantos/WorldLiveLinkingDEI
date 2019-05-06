import types from '../constants/actionTypes';

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

export function alumniFetchData(url) {
    return (dispatch) => {
        dispatch(alumniIsFetching(true));

        fetch(url)
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

export function resetAlumni() {
    return {
        type: types.ALUMNI_RESET,
    };
}