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


export function validateAlumniSuccess(data) {
    return {
        type: types.VALIDATE_ALUMNI_SUCCESS,
        data
    };
}



export function alumniPendingFetchData(url='/alumnisnotactivated') {
    return (dispatch) => {
        dispatch(alumniPendingIsFetching(true));

        apiInstance.get(url)
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


export function alumniPendingUpdate(id, url='/validatealumni') {
    return (dispatch) => {

        const data = { id };

        apiInstance.put(url, data)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                return response
            })
            .then(() => dispatch(validateAlumniSuccess({ id })))
            .catch(() => {});
    };
}