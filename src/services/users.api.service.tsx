import axiosInstance from "./api.service";
import {IUserModel} from "../models/IUserModel";
import {AxiosResponse} from "axios";

const usersApiService = {
    getAllUsers:():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('users')
    }
}

export default usersApiService;