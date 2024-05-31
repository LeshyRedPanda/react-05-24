import {AuthDataModel} from "../models/AuthDataModel";
import axiosInstance from "./api.service";
import {ITokenObtainPair} from "../models/ITokenObtainPair";


const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;
        try {
            response =
                await axiosInstance.post<ITokenObtainPair>('/auth', authData) //401 = try/catch
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e);
        }


        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data)); // set new token pair to local storage


    },
}


export default authService;