import * as actionTypes from './actionTypes';
import { API } from '../../api/api';


export const FETCH_PRODUCTS_REQUEST = 'FETCH PRODUCTS REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH PRODUCTS SUCCESS';
export const FETCH_MORE_PRODUCTS = 'FETCH MORE PRODUCTS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH PRODUCTS FAILURE';
export const FetchState = actionTypes.FetchState;
export const SET_ACTIVE_PAGE = actionTypes.SET_ACTIVE_PAGE;


// Ürünleri getirme isteği için eylem oluşturucu
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
  fetchState: FetchState.FETCHING,
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


// Ürünleri getirmek için eylem oluşturucu
export const fetchProduct = (category = null, sortOption = null , filteredText = null) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    API
      .get("/products", { params: { category, sort: sortOption, filter: filteredText }})
      .then((response) => {
        //console.log("ürünler is coming", response.data.products);
        dispatch(fetchProductsSuccess(response.data.products, response.data.total));
      })
      .catch((error) => {
        //console.log(error.message);
        dispatch(fetchProductsFailure(error.message));
      });
  }
};
