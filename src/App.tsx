import React, {FC} from 'react';
import './App.css';
import {useAppDispatch,} from "./redux/store";
import {decrement, increment, incrementByAmount, initValue, resetBtn, useAppSelector} from "./redux/slices/slice1";

const App: FC = () => {
    const {value} = useAppSelector((state) => state.slice1);// all slices from storage // {value} = initialState

    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={()=>{
                dispatch(initValue())
            }}>Initial value</button><br/>
            <button onClick={() => {
                dispatch(increment(10))
            }}
            >Increment (+10)
            </button><br/>
            <button onClick={() => {
                dispatch(decrement(1))
            }}
            >Decrement (-1)
            </button><br/>
            <button onClick={() => {
                dispatch(incrementByAmount())
            }}
            >Increment by amount (+91)
            </button><br/>
            <button onClick={() => {
                dispatch(resetBtn())
            }}
            >Reset to 0
            </button>
        </div>

    );
}

export default App;