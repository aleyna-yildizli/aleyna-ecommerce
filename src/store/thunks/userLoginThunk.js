
import axiosInstance from "../../axios";
import {UserData, userRequest, userSuccess, userFailure } from "../actions/userActions";

export const loginUser = (userData) => (dispatch) => {
    dispatch(userRequest(userData));
    axiosInstance.post('/login', userData)
      .then((response) => {
        dispatch(UserData(response.data));
        dispatch(userSuccess(response.data));
      })
      .catch((error) => {
        let errorMessage = "Bir hata oluştu";
  
        if (error.response) {
          if (error.response.status === 401) {
            errorMessage = "Kullanıcı adı veya şifre yanlış";
          } else {
            errorMessage = "Sunucu hatası, lütfen daha sonra tekrar deneyin";
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        dispatch(userFailure(errorMessage));
      });
  };