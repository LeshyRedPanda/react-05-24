import {IUserModel} from "../models/IUserModel";
import {axiosInstance} from "./api.service";
import {urls} from "../constants/urls";

export const userService = {
    getAllUsers: async (): Promise<IUserModel[]> => {
        const response = await axiosInstance.get<IUserModel[]>(urls.users.base);
        return response.data
    },
    getUserById: async (id: string): Promise<IUserModel> => {
        const response = await axiosInstance.get<IUserModel>(urls.users.byId(+id));
        return response.data
    }
}