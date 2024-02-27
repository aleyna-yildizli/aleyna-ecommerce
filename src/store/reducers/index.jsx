import { combineReducers } from 'redux';
import globalReducers from './globalReducers';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    global: globalReducers,
    user: userReducer,
});

export default rootReducer;