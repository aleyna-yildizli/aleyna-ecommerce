import { USER_LOGIN, USER_LOGOUT } from '../actions/userActions';

const userInitial = {
  userData: {}, // Kullanıcı bilgileri
  isAuthenticated: false // Oturum durumu
};

const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userData: action.payload,
        isAuthenticated: true
      };
    case USER_LOGOUT:
      return {
        ...state,
        userData: {},
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default userReducer;


{/* 
USER_LOGIN eylemi, kullanıcı girişi yapıldığında kullanıcı bilgilerini günceller ve kullanıcının kimlik doğrulamasını gerçekleştirir. 
USER_LOGOUT eylemi, kullanıcı çıkış yaptığında kullanıcı bilgilerini ve kimlik doğrulama durumunu sıfırlar. 
*/}
