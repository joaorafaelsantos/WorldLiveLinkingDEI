import types from '../constants/actionTypes';
import { config } from '../config';
import {apiInstance} from "./api";

export function alumniPendingHasFailed(bool) {
    return {
        type: types.ALUMNI_PENDING_FETCH_FAILURE,
        error: bool
    };
}

export function alumniPendingIsFetching(bool) {
    return {
        type: types.ALUMNI_PENDING_FETCH_REQUEST,
        isFetching: bool
    };
}

export function alumniPendingFetchDataSuccess(data) {
    return {
        type: types.ALUMNI_PENDING_FETCH_SUCCESS,
        data
    };
}

export function alumniPendingFetchData(url='/alumnisnotactivated') {
    return (dispatch) => {
        dispatch(alumniPendingIsFetching(true));

        apiInstance.get(`${config.BASE_URL}${url}`)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(alumniPendingIsFetching(false));
                return response
            })
            .then((response) => response.data)
            .then((items) => dispatch(alumniPendingFetchDataSuccess(items)))
            .catch(() => dispatch(alumniPendingHasFailed(true)));
    };
}