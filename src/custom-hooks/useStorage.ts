import {useEffect, useRef, useState} from "react";
import {type} from "node:os";

// useStorage - hook that allows a component to store a value in the browser's LocalStorage

const useStorage = (key:string,localStorageObj:string, defaultValue:string) => {
    const [value, setValue] = useState(() => {
        let jsonValue = localStorageObj.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === 'function') {
            return defaultValue();
        }else {
            return defaultValue;
        }

    });

    useEffect(() => {
        if (value === undefined) return localStorageObj.remove(key);
        localStorageObj.setItem(key,JSON.stringify(value))
    },[key,value,localStorageObj])
    return[value,setValue];
}// and of custom hook

// useStorage('1','kokos',window.localStorage);



