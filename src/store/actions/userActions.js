import { toast } from "react-toastify";
import { API } from '../../api/api.js'


export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


// Kullanıcının log in isteği
export const userLogin = (userData) => ({
  type: USER_LOGIN, payload: userData
})

//Kullanıcının log out isteği
export const userLogout = () => ({
  type: USER_LOGOUT,
});


//kullanıcının oturumunu açtığında kullanıcı bilgilerini Redux store'a yerleştirmek için thunk actionı
export const loginUser = (userData, history) => (dispatch) => {
  return API
    .post('/login', userData)
    .then((response) => {
      dispatch(userLogin(response.data));
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.name + " Welcome!", {
        position: "top-right",
      });
      setTimeout(() => {
        history.push("/");
      }, 3000);
      return response;
    })
    .catch((error) => {
      toast.error(error.response.data.message, {
        position: "top-right",
      });
      throw error;
    });
};

//kullanıcı oturumunu sonlandırdığınızda Redux store'dan kullanıcı bilgilerini temizlemek için thunk action
export const logoutUser = () => {
  return (dispatch) => {
    dispatch(userLogout());
    localStorage.removeItem("token");
  };
};



{/* userAction dosyası sadece kullanıcı ile ilgili özel eylemleri yönetir. */ }
