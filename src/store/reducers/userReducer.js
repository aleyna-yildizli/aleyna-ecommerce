import { SET_USER_DATA, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions/userActions';

const userInitial = {
    userData: {},
    isLoading: false,
    error: null,
  };



export default function userReducer (state = userInitial, action)  {
    switch (action.type) {
        case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
      case SIGN_UP_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
      case SIGN_UP_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  {/* userReducer kullanıcıyla ilgili durumları (kullanıcı verileri, yükleme durumu ve hata) yönetmek için uygun bir şekilde tasarlanmıştır. */}

