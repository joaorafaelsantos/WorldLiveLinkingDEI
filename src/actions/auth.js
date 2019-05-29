import types from '../constants/actionTypes';
import {apiInstance} from "./api";

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

export function registerHasFailed(bool) {
    return {
        type: types.REGISTER_FETCH_FAILURE,
        error: bool
    };
}

export function registerIsFetching(bool) {
    return {
        type: types.REGISTER_FETCH_REQUEST,
        isFetching: bool
    };
}

export function registerFetchDataSuccess(data) {
    return {
        type: types.REGISTER_FETCH_SUCCESS,
        data
    };
}

export function profileHasFailed(bool) {
    return {
        type: types.PROFILE_FETCH_FAILURE,
        error: bool
    };
}

export function profileIsFetching(bool) {
    return {
        type: types.PROFILE_FETCH_REQUEST,
        isFetching: bool
    };
}

export function profileFetchDataSuccess(data) {
    return {
        type: types.PROFILE_FETCH_SUCCESS,
        data
    };
}

export function authFetchData(credentials, url = '/login') {
    return (dispatch) => {
        dispatch(authIsFetching(true));


        let formData = new FormData();
        formData.set('username', credentials.email);
        formData.set('password', credentials.password);

        const request = {
            url: url,
            method: "POST",
            data: formData
        };

        apiInstance.request(request)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(authIsFetching(false));

                return response;
            })
            .then(response => {
                const data = response.data;
                if (data.result !== "Aloha") {
                    throw Error("Authentication failed.");
                }
            })
            .then(() => dispatch(authFetchDataSuccess({isAuth: true})))
            .catch(() => {
                dispatch(authHasFailed(true))
            });

    };
}


export function profileFetchData(url = '/alumni/getloggeduserinfo') {
    return (dispatch) => {
        dispatch(authIsFetching(true));

        const request = {
            url: url,
            method: "GET"
        };

        apiInstance.request(request)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(profileIsFetching(false));

                return response;
            })
            .then(response => response.data)
            .then(profile => dispatch(profileFetchDataSuccess({isAuth: true, profile})))
            .catch(() => {
                dispatch(profileHasFailed(true))
            });

    };
}


export function registerFetchData(registration, url = '/alumni') {
    return (dispatch) => {
        dispatch(authIsFetching(true));

        const body = {
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
            email: registration.email,
            id: "",
            location: {
                city: "",
                latitude: "",
                location: "",
                longitude: ""
            },
            name: registration.name,
            password: registration.password,
            username: registration.username
        };

        const request = {
            url: url,
            method: "POST",
            data: body
        };

        // apiInstance.request(request)
        //     .then((response) => {
        //         if (response.status !== 200) {
        //             throw Error(response.statusText);
        //         }
        //
        //         dispatch(registerIsFetching(false));
        //
        //         return response;
        //     })
        //     .then(response => {
        //         const data = response.data;
        //         if (data.result !== "Aloha") {
        //             throw Error("Authentication failed.");
        //         }
        //     })
        //     .then(() => dispatch(registerFetchDataSuccess({isAuth: true})))
        //     .catch(() => {
        //         dispatch(registerHasFailed(true))
        //     });

    };
}


export function resetAuth() {
    return {
        type: types.AUTH_RESET,
    };
}