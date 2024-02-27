import { combineReducers } from 'redux';
import globalReducers from './globalReducers';
import userReducer from './userReducer';
import productReducer from './productReducers';


const rootReducer = combineReducers({
    global: globalReducers,
    user: userReducer,
    product: productReducer,
});

export default rootReducer;