import axios from "axios";
//import cache from "../utils/cache";

const apiClient = axios.create({
    baseURL: "http://172.20.10.3:5000/api/v1",
});


// const get = apiClient.get

// apiClient.get = async (url, params, axiosConfig) => {
//     const response = await get(url, params, axiosConfig)

//     if(response == 200){
//         cache.store(url, response.data)
//         return response;
//     }

//     const data = await cache.get(url)
//     return data ? { ok: true, data } : response
// }


export default apiClient;