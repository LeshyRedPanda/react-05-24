import {useState} from "react";



// useToggle - custom React hook that allows a component to toggle a value between true and false
// import { useState } from "react"



export const useToggle = (defaultValue:boolean) => {
   const [value,setValue ]= useState<boolean>(defaultValue);

   function toggleValue(valueState:boolean){
       setValue(prevValue => !valueState);
   }
   return [value,toggleValue] as const;
};

// let [value,toggleValue] = useToggle(true)

// toggleValue(false)