import {IPostModel} from "../models/IPostModel"
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../services/postService";
import {AxiosError} from "axios";
import {userActions} from "./UserSlice";

type PostSliceType = {
    posts: IPostModel[],
    postsByID: IPostModel[] | null,
    isLoaded: boolean,
    error: string | null,
}

const postInitState: PostSliceType = {
    posts: [],
    postsByID: null,
    isLoaded: false,
    error: null,
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAllPosts();
            thunkAPI.dispatch(userActions.changeLoadState(true)); // isLoaded fnc
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const loadPostsById = createAsyncThunk(
    'postSlice/loadPost',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const postsById = await postService.getPostsById(id);
                return thunkAPI.fulfillWithValue(postsById)
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error)
            }
        }
        return null;
    }
)

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload; // isLoaded fnc
        }
    },
    extraReducers: builder => builder
        .addCase(
            loadPosts.fulfilled,
            (state, action) => {
                state.posts = action.payload;
            })
        .addCase(loadPosts.rejected,
            (state, action) => {
                console.error('failed load posts: ', action.payload)
                state.error = action.payload as string;
            })
        .addCase(loadPostsById.fulfilled,
            (state, action) => {
                state.postsByID = action.payload;
            })
        .addCase(loadPostsById.rejected,
            (state, action) => {
                console.error('failed load post by id :', action.payload)
                state.error = action.payload as string;
            })
        .addMatcher(isFulfilled(loadPosts,loadPostsById),(state, action) =>{
            console.log('data loaded :', action.payload)
        })
})

export const postActions = {
    ...postSlice.actions, // to use changeLoadState with dispatch()
    loadPosts,
    loadPostsById
}
