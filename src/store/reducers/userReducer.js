import { USER_DATA, USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../actions/userActions';

const userInitial = {
    userData: {},
    isLoading: false,
    error: null,
  };



export default function userReducer (state = userInitial, action)  {
    switch (action.type) {
        case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
      case USER_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
          userData: action.payload,
        };
      case USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: null
        };
      case USER_FAILURE:
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

