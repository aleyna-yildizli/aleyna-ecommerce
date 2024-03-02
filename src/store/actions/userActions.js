// actions.js
export const USER_DATA = 'USER_DATA';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';


//Kullanıcı tarafından sağlanan bilgiler
export const UserData = (userData) => ({
    type: USER_DATA, payload: userData
  });

//Kullanıcının login isteği
export const userRequest = (userData) => ({
  type: USER_REQUEST, payload: userData
});

//Kullanıcının login işleminin başarıyla tamamlandığı
export const userSuccess = () => ({
  type: USER_SUCCESS
});

//Kullanıcının login işleminin başarısız olduğu
export const userFailure = (error) => ({
  type: USER_FAILURE, payload: error
});
