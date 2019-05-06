import types from '../constants/actionTypes';

export function authHasFailed(bool) {
    return {
        type: types.AUTH_FETCH_FAILURE,
        error: bool
    };
}

export function authIsFetching(bool) {
    return {
        type: types.AUTH_FETCH_REQUEST,
        isFetching: bool
    };
}

export function authFetchDataSuccess(data) {
    return {
        type: types.AUTH_FETCH_SUCCESS,
        data
    };
}

export function authFetchData(url = null) {
    return (dispatch) => {
        dispatch(authIsFetching(true));
        
        if (!url) dispatch(authFetchDataSuccess({isAuth: true}));

        else {
            fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(authIsFetching(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(authFetchDataSuccess(items)))
            .catch(() => dispatch(authHasFailed(true)));
        }
    };
}

export function resetAuth() {
    return {
        type: types.AUTH_RESET,
    };
}