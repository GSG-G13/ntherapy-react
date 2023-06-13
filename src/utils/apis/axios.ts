import axios from "axios";

const {VITE_BASEURL} = import.meta.env

const axiosInstance = axios.create({
baseURL: VITE_BASEURL,
})

axiosInstance.interceptors.response.use(
    (res) => res.data,
    (error) => {
      
      return Promise.reject(error.reponse.data);
    }
    ,
  );


  export default axiosInstance