import * as actionTypes from '../actions/actionTypes'
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_MORE_PRODUCTS, FETCH_PRODUCTS_FAILURE } from '../actions/productActions'

const productInitial = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: actionTypes.FetchState.NOT_FETCHED,
};

const productReducer = (state = productInitial, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        fetchState: actionTypes.FetchState.FETCHING,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload.productList,
        totalProductCount: action.payload.totalProductCount,
        pageCount: Math.ceil(action.payload.totalProductCount / 25), // Assuming 25 products per page
        fetchState: actionTypes.FetchState.FETCHED,
      };
      case FETCH_MORE_PRODUCTS:
        return {
          ...state,
          productList: [...state.productList, ...action.payload.productList], // Adding more products to existing list
          totalProductCount: action.payload.totalProductCount,
          pageCount: Math.ceil(action.payload.totalProductCount / 25), // Assuming 25 products per page
          fetchState: actionTypes.FetchState.FETCHED,
        };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        fetchState: actionTypes.FetchState.FAILED,
      };
    case actionTypes.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
      case actionTypes.SET_FETCH_STATE: 
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
