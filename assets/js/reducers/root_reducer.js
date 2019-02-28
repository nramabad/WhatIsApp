import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer'

const RootReducer = combineReducers({
    sessionReducer
});

export default RootReducer;