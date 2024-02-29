// storeReducer.js

import { SET_STORE } from "../actions/storeAction";


const storeInitial = {
  store: {} // Mağaza verileri burada saklanacak
};

// Store Reducer
const storeReducer = (state = storeInitial, action) => {
  switch (action.type) {
    case 'SET_STORE':
      return {
        ...state,
        store: action.payload // Gelen mağaza verilerini sakla
      };
    default:
      return state;
  }
};

export default storeReducer;
