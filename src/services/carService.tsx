import axiosInstance from "./api.service";
import {retrieveLocalStorageData} from "./helpers/utils/helpers";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import ICarPaginatedModel from "../models/ICarPaginatedModel";
import {AxiosError} from "axios";
import authService from "./authService";

axiosInstance.interceptors.request.use(request => { // interceptors to get data from request (or response)

    //                      check token pair                   check url
    // if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh'))
    if (localStorage.getItem('tokenPair')) {
        const iTokenObtainPair = retrieveLocalStorageData<ITokenObtainPair>('tokenPair'); // const with tokens
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access) // get key with access token
    }


    return request;
})

const carService = {
    getCars: async () => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
            return response.data;
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) { // 401 -  not authorized / unauthorized
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars();
            }
        }
    }

};

export default carService;