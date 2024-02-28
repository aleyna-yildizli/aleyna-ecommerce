export const SET_STORE = 'SET_STORE';

// Action Creator: Mağaza bilgilerini ayarla
export const setStore = (storeData) => ({
  type: SET_STORE,
  payload: storeData
});