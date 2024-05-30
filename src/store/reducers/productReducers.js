import { SET_FETCH_STATE, SET_PRODUCTS, SET_ACTIVE_PAGE, FetchStates }  from '../actions/productActions'

const productInitial = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: FetchStates.NOT_FETCHED,
};

const productReducer = (state = productInitial, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productList: action.payload.productList,
        totalProductCount: action.payload.totalProductCount,
        pageCount: Math.ceil(action.payload.totalProductCount / 12), // Assuming 25 products per page
        fetchState: FetchStates.FETCHED,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;