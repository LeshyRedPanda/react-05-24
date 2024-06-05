import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";
import axiosInstance from "./api.service";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";
import {retrieveLocalStorageData} from "./helpers-utils/helpers";

axiosInstance.interceptors.request.use(request => {
    if(localStorage.getItem('tokenPair')){
        const iTokenObtainPair = retrieveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization','Bearer ' + iTokenObtainPair.access)
    }
    return request;
})


const carService = {
    getCars: async (page:string):Promise<ICarPaginatedModel | null> => {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars',{params:{page:page}});// add key-value /cars?page=2,3,4,5
            return response.data;

    }
}



export default carService;


