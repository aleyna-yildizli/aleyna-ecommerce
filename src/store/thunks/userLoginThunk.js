import axiosInstance from "../../axios";
import { UserData, userRequest } from "../actions/userActions";

export const loginUser = (userData) => (dispatch) => {
  dispatch(userRequest(userData));
  return axiosInstance.post('/login', userData)
    .then((response) => {
      dispatch(UserData(response.data));
      return response.data; // Başarılı giriş durumunda kullanıcı verilerini döndür
    })
    .catch((error) => {
      throw error; // Hatalı giriş durumunda hata fırlat
    });
};
