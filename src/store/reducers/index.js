import { combineReducers } from 'redux';
import globalReducers from './globalReducers';
import userReducer from './userReducer';
import productReducer from './productReducers';
import shoppingCartReducer from './shoppingCardReducers';
import storeReducer from './storeReducer';


const rootReducer = combineReducers({
    global: globalReducers,
    user: userReducer,
    product: productReducer,
    shop: shoppingCartReducer,
    store: storeReducer
});

export default rootReducer;