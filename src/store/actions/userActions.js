export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


// Kullanıcı oturum açma işlemi başlatılır
export function login(userData)  {
    return { type: 'LOGIN_REQUEST', payload: userData };
  };
  
  // Kullanıcı oturum açma işlemi başarılı olduğunda
  export function loginSuccess(user) {
    return { type: 'LOGIN_FAIL', payload: user };
  };
  
  // Kullanıcı oturum açma işlemi başarısız olduğunda
  export function loginFail(error) {
    return { type: 'LOGIN_FAIL', payload: error};
  };
  
  // Kullanıcı oturumu kapatma işlemi başlatılır
  export function logout () {
    return { type: 'LOGOUT_REQUEST'};
  };
  
  // Kullanıcı oturumu kapatma işlemi başarılı olduğunda
  export function logoutSuccess() {
    return { type: 'LOGOUT_SUCCESS' };
  };
  
  // Kullanıcı bilgilerini yükleme işlemi başlatılır
  export function loadUser() {
    return { type: 'USER_LOADING' };
  };
  
  // Kullanıcı bilgileri başarıyla yüklendiğinde
  export function userLoaded(user) {
    return { type: 'USER_LOADED', payload: user };
  };
  
  // Hata durumunda
  export function authError(error) {
    return { type: 'AUTH_ERROR', payload: error};
  };
  