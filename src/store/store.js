import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from '../store/reducers/index.jsx'

const myStore = createStore(rootReducer);

export default myStore;