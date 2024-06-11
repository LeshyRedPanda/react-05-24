import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

type CounterStateType = {
    value: number
}

const initialState: CounterStateType = {
    value: 123
};


export const counter1slice = createSlice({
    name: "counter1", // name - requirement to create a slice
    initialState: initialState,
    reducers: { // actions ,manipulators
        initValue: (state) => {
            state.value = initialState.value
        },
        increment: (state, action: PayloadAction<number>) => { //(state) = initialState // action:PayloadAction<number> - argument to function
            state.value = state.value + action.payload // PayloadAction argument
        },
        decrement: (state, action: PayloadAction<number>) => { //(state) = initialState
            state.value = state.value - action.payload
        },
        incrementByAmount: (state) => {
            state.value = state.value + 91
        },
        resetBtn: (state) => {
            state.value = 0
        }
    }
});


export const store = configureStore({ // storage with slice(s)
    reducer: {
        slice1: counter1slice.reducer // .reducer - initialState
    }
});


export type RootState = ReturnType<typeof store.getState> // typeof store.getState - the type of the entire state of Redux store
export const useAppSelector = useSelector.withTypes<RootState>()

export const {
    initValue,
    increment,
    decrement,
    incrementByAmount,
    resetBtn
} = counter1slice.actions