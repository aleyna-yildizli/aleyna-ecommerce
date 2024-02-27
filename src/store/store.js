import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from '../store/reducers/index.js'

const myStore = createStore(rootReducer);

export default myStore;