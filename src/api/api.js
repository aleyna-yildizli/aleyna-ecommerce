import axios from "axios";

const BASE_URL = "https://workintech-fe-ecommerce.onrender.com/";

export const createApiInstance = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: BASE_URL,
        headers: token ? { Authorization: token } : {},
    });
}


let API = createApiInstance();

const renewAPI = () => {
    API = createApiInstance();
};

renewAPI();

export { API, renewAPI };



{/* API işlemlerini başka bir dosyada yöneterek, kodumu daha modüler hale getirdim ve tekrar kullanılabilirliği arttırdım. 
Bu sayede, API isteklerini yöneten kodları ayrı bir dosyada toplayabilir ve gerektiğinde farklı bileşenlerde kullanabilirim.*/}




