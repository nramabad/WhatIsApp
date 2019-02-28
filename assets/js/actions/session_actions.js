import Cookies from 'universal-cookie';

import { errorOnFetch, sessionResource } from '../utils/session_api_utils';

export const AUTHENTICATION_SUCCEEDED = "AUTHENTICATION_SUCCEEDED";
export const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";
export const AUTHENTICATION_SIGNOUT = "AUTHENTICATION_SIGNOUT";

export const signIn = (email, password) => ((dispatch) => {
    return fetch(`http://localhost:4000/sessions/sign_in}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    }).then(
        response => {
            if (!response.ok) {
                // Manage error
                return dispatch(errorOnFetch(response.statusText));
            }
            return response.json().then(response => dispatch(signInSuccessful(response.data)));
        },
        error => {
            return dispatch(errorOnFetch(error))
        }
    );
});

const signInSuccessful = (data) => {
    setAuthToken(data.token);
    return {
        type: AUTHENTICATION_SUCCEEDED,
    }
};

const signInFailed = () => {
    removeAuthToken();
    return {
        type: AUTHENTICATION_FAILED,
    };
};

export const signOut = () => {
    removeAuthToken();
    return {
        type: AUTHENTICATION_SIGNOUT,
    }
};

const setAuthToken = (token) => {
    const cookies = new Cookies();
    cookies.set('what_is_auth_token', token, {
        path: '/',
        // domain: 'salvadanaio.tommyblue.it',
        // secure: true,
        // maxAge: 86400,
        // expires: <date>,
    });
};

export const getAuthToken = () => {
    const cookies = new Cookies();
    return cookies.get('what_is_auth_token');
};

const removeAuthToken = () => {
    const cookies = new Cookies();
    cookies.remove('what_is_auth_token', {
        path: '/',
        // domain: 'salvadanaio.tommyblue.it',
        // secure: true,
        // maxAge: 86400,
        // expires: <date>,
    });
};