import {useDispatch} from "react-redux";
import {store} from "./slices/slice1";


type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();