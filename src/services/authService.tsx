import axiosInstance from "./api.service";
import {AuthDataModel} from "../Models/AuthDataModel";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";


const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;
        try {
            response =
                await axiosInstance.post<ITokenObtainPair>('/auth', authData)
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e);
        }
        return !!(response?.data?.access && response?.data?.refresh)
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh',{refresh:'refreshToken'});
        localStorage.setItem('tokenPair',JSON.stringify(response.data));
    }
}

export default authService;