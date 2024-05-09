import {useRef, useState} from "react";


// usePrevious - hook that allows a component to keep track of the previous value of a variable


export const usePrevious =<T,> (value: T):T | undefined => { // This function takes one parameter, 'value', which represents the current value we want to track.
    const currentRef = useRef<T>(value); //'currentRef' to store the current value
    const previousRef = useRef<T | undefined>(); // 'previousRef' to store the previous value.

    if (currentRef.current !== value) { // check if the current value has changed ⬇
        previousRef.current = currentRef.current //  if it has,we update 'previousRef' with the value stored in 'currentRef'
    }
    return previousRef.current // we return the value stored in 'previousRef'
}

// usePrevious<number>(100500)

