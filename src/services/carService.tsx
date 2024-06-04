import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";
import axiosInstance from "./api.service";
import {AxiosError} from "axios";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";
import authService from "./authService";
import {retrieveLocalStorageData} from "./helpers-utils/helpers";

axiosInstance.interceptors.request.use(request => {
    if(localStorage.getItem('tokenPair')){
        const iTokenObtainPair = retrieveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization','Bearer ' + iTokenObtainPair.access)
    }
    return request;
})



const carService = {
    getCars: async ():Promise<ICarPaginatedModel['items'] | undefined> => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
            return response.data.items
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars();
            }
        }
    }
}


export default carService;


