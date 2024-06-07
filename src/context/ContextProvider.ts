import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

type StoreType = {
    userStore: { allUsers: IUserModel[] },
    postsStore: { allPosts: IPostModel[] },
    commentsStore: { allComments: ICommentModel[] },
}

const defaultValue: StoreType = {
    userStore: {allUsers: []},
    postsStore: {allPosts: []},
    commentsStore: {allComments: []},
}

const Context = createContext<StoreType>(defaultValue)


const useContextProvider = (): StoreType => {
    return useContext(Context)
};

export {
    Context,
    defaultValue,
    useContextProvider,
}