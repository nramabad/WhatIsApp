import Cookies from 'universal-cookie';

import {
    AUTHENTICATION_SUCCEEDED,
    AUTHENTICATION_SIGNOUT
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = false, action) => {
    switch (action.type) {
        case AUTHENTICATION_SUCCEEDED:
            return ({
                ...state,
                isAuthenticated: true,
            });
        case AUTHENTICATION_SIGNOUT:
            return ({
                ...state,
                isAuthenticated: false,
            });
    }
};

export default sessionReducer;
