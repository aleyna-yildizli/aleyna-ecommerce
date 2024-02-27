import * as actionTypes from './actionTypes'


export const FETCH_PRODUCTS_REQUEST = 'FETCH PRODUCTS REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH PRODUCTS SUCCESS';
export const FETCH_MORE_PRODUCTS = 'FETCH MORE PRODUCTS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH PRODUCTS FAILURE';
export const FetchState = actionTypes.FetchState;
export const SET_ACTIVE_PAGE = actionTypes.SET_ACTIVE_PAGE;


// Ürünleri getirme isteği için eylem oluşturucu
export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
    fetchState: FetchState.FETCHING
  });
  
// Ürünleri başarıyla getirme durumunda eylem oluşturucu
export const fetchProductsSuccess = (productList, totalProductCount) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { productList, totalProductCount },
    fetchState: FetchState.FETCHED
  });
  
// Daha fazla ürün getirme durumunda eylem oluşturucu
export const fetchMoreProducts = (productList, totalProductCount) => ({
    type: FETCH_MORE_PRODUCTS,
    payload: { productList, totalProductCount },
    fetchState: FetchState.FETCHING
  });
  
// Ürünleri getirme başarısız olduğunda eylem oluşturucu
export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error },
    fetchState: FetchState.FAILED 
  });

  export const setActivePage = (pageNumber) => ({
    type: SET_ACTIVE_PAGE,
    payload: pageNumber
});