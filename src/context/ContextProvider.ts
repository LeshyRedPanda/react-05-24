import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    userStore: { allUsers: IUserModel[]
    loadUsers: (user: IUserModel[]) => void,
    },
    postsStore: { allPosts: IPostModel[]
    loadPosts: (post: IPostModel[]) => void,
    },
    commentsStore: { allComments: ICommentModel[]
    loadComments: ( comment: ICommentModel[] ) => void ,
    },
}

// const defaultValue: StoreType = {
//     userStore: {allUsers: []},
//     postsStore: {allPosts: []},
//     commentsStore: {allComments: []},
// }

// const Context = createContext<StoreType>(defaultValue)
//
//
// const useContextProvider = (): StoreType => {
//     return useContext(Context)
// };

const useStore = create<StoreType>()((set) => {
    return {
        userStore: {
                allUsers: [],
                // loadUsers - function set "users[]"
                loadUsers: (users: IUserModel[]) => {
                    return set((state:StoreType) => {
                        return{
                            ...state,
                            userStore:{
                                ...state.userStore,
                                allUsers:users
                            }
                        }
                    })
                }
            },
        postsStore: {
                allPosts: [],
                // loadPosts - function set "posts[]"
                loadPosts: (posts:IPostModel[]) => {
                    return set((state:StoreType) => {
                        return{
                            ...state,
                            postsStore:{
                                ...state.postsStore,
                                allPosts:posts
                            }
                        }
                    })
                }
            },
        commentsStore: {
                allComments: [],
                // loadComments - function set "comments[]"
                loadComments: (comments:ICommentModel[]) => {
                    return set((state:StoreType) => {
                        return{
                            ...state,
                            commentsStore:{
                                ...state.commentsStore,
                                allComments:comments
                            }
                        }
                    })
                }
            }
    }
});


export {
    // Context,
    // useContextProvider,
    // defaultValue,
    useStore
}