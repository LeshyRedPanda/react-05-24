import {ICommentModel} from "../models/ICommentModel";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {commentService} from "../services/commentService";
import {userActions} from "./UserSlice";
import {AxiosError} from "axios";

type CommentSliceType = {
    comments: ICommentModel[],
    commentsByID: ICommentModel[] | null,
    isLoaded: boolean,
    error: string | null
}

const commentInitState: CommentSliceType = {
    comments: [],
    commentsByID: [],
    isLoaded: false,
    error: null
}

const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await commentService.getAllComments();
            thunkAPI.dispatch(userActions.changeLoadState(true)); // isLoaded fnc
            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const loadCommentsById = createAsyncThunk(
    'commentSlice/loadCommentsById',
    async (postId: string | undefined, thunkAPI) => {
        if (postId) {
            try {
                const commentsById = await commentService.getCommentsById(postId);
                return thunkAPI.fulfillWithValue(commentsById);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error)
            }
        }
        return null;
    }
)


export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload; // isLoaded fnc
        }
    },
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled,
            (state, action) => {
                state.comments = action.payload
            })
        .addCase(loadComments.rejected,
            (state, action) => {
                console.error('Failed load comments :', action.payload);
                state.error = action.payload as string;
            })
        .addCase(loadCommentsById.fulfilled,
            (state, action) => {
                state.commentsByID = action.payload
            })
        .addCase(loadCommentsById.rejected,
            (state, action) => {
                console.error('failed load comments by id:', action.payload)
            })
        .addMatcher(isFulfilled(loadCommentsById, loadComments), (state, action) => {
            console.log('data loaded :', action.payload)
        })
})

export const commentActions = {
    ...commentSlice.actions,// to use changeLoadState with dispatch()
    loadComments,
    loadCommentsById
}