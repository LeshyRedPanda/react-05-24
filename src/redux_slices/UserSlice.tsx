import {IUserModel} from "../models/IUserModel";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../services/userService";
import {AxiosError} from "axios";


type UserSliceType = {
    users: IUserModel[],
    user: IUserModel | null,
    isLoaded: boolean,
    error: string | null
}

const userInitialState: UserSliceType = {
    users: [],
    user: null,
    isLoaded: false,
    error: null,
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {

        try {
            const users = await userService.getAllUsers();
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const user = await userService.getUserById(id)
                return thunkAPI.fulfillWithValue(user)
            } catch
                (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null;
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder => builder
        //users case
        .addCase(
            loadUsers.fulfilled,
            (state, action) => {
                state.users = action.payload;
            })
        .addCase(loadUsers.rejected,
            (state, action) => {
                console.error('failed load users: ', action.payload);
                state.error = action.payload as string;
            }
        )
        .addCase(loadUserById.fulfilled, (state, action) => {
            state.user = action.payload
        })
        // user By ID case
        .addCase(loadUserById.rejected, (state, action) => {
            console.error('failed load user bu id :', action.payload)
            state.error = action.payload as string;
        })
        .addMatcher(isFulfilled(loadUsers, loadUserById), (state, action) => {
            console.log('data loaded successfully :', action.payload)
        })
})


export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
}