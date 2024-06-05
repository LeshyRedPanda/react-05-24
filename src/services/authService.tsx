import axiosInstance from "./api.service";
import {AuthDataModel} from "../Models/AuthDataModel";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";
import {retrieveLocalStorageData} from "./helpers-utils/helpers";


const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth', authData)
            localStorage.setItem('tokenPair', JSON.stringify(response.data));



        return !!(response?.data?.access && response?.data?.refresh)
    },
    refresh: async () => {
        const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh',{refresh:refreshToken});
        localStorage.setItem('tokenPair',JSON.stringify(response.data));
    }
}

export default authService;