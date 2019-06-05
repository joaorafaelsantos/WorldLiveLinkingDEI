import types from '../constants/actionTypes';
import {apiInstance} from "./api";
import {config} from "../config";

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

export function updateProfileSuccess(data) {
    return {
        type: types.PROFILE_UPDATE_SUCCESS,
        data
    };
}

export function updateProfileFailed(bool) {
    return {
        type: types.PROFILE_UPDATE_FAILURE,
        error: bool
    };
}

export function resetAuth() {
    return {
        type: types.AUTH_RESET,
    };
}

export function authFetchData(credentials, url = '/login') {
    return (dispatch) => {
        dispatch(authIsFetching(true));

        let formData = new FormData();
        formData.set('username', credentials.username);
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
            .then(() => dispatch(authFetchDataSuccess({isAuth: true, profile: {username: credentials.username}})))
            .catch(() => {
                dispatch(authHasFailed(true))
            });
    };
}


export function profileFetchData(url = '/alumni/getloggeduserinfo') {
    return (dispatch) => {
        dispatch(profileIsFetching(true));

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
            .then(profile => {
                delete profile.username;

                dispatch(profileFetchDataSuccess({isAuth: true, profile: {...profile}}))
            })
            .catch(() => {
                dispatch(profileHasFailed(true))
            });

    };
}

export function registerFetchData(registration, url = '/createalumni') {
    return (dispatch) => {
        dispatch(registerIsFetching(true));

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

        apiInstance.request(request)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(registerIsFetching(false));

                return response;
            })
            .then(response => response.data)
            .then(() => dispatch(registerFetchDataSuccess({isAuth: true, profile: {...body, password: undefined}})))
            .catch(() => {
                dispatch(registerHasFailed(true))
            });
    };
}

export function updateProfile(newProfile, url = '/updatealumni') {
    return (dispatch) => {
        const body = {
            company: {
                email: "",
                job: newProfile.jobDescription,
                name: newProfile.company,
                startDate: ""
            },
            course: {
                endDate: "",
                name: newProfile.degree,
                startDate: "",
                university: ""
            },
            location: {
                city: newProfile.location,
                latitude: "",
                location: "",
                longitude: ""
            },
            name: newProfile.name,
            username: newProfile.username
        };

        const request = {
            url: url,
            method: "PUT",
            data: body
        };

        apiInstance.request(request)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => {
                return response.data
            })
            .then(() => dispatch(updateProfileSuccess({profile: body})))
            .catch(() => {
                dispatch(updateProfileFailed(true))
            });
    };
}


export function resetAuthData(url = '/logout') {
    return (dispatch) => {
        const request = {
            url: url,
            method: "GET"
        };

        fetch(`${config.BASE_URL}${url}`)
            .then((response) => {
                if (response.status !== 204) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(() => dispatch(resetAuth()))
            .catch(() => {});

    };
}
