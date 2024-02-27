// actions.js
export const SET_USER_DATA = 'SET_USER_DATA';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';


//Kullanıcı tarafından sağlanan bilgiler
export const setUserData = (userData) => ({
    type: SET_USER_DATA, payload: userData
  });

//Kullanıcının SİGN UP isteği
export const signUpRequest = (userData) => ({
  type: SIGN_UP_REQUEST, payload: userData
});

//Kullanıcının kaydolma işleminin başarıyla tamamlandığı
export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

//Kullanıcının kaydolma işleminin başarısız olduğu
export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE, payload: error
});

