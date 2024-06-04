import React, {useEffect, useState} from 'react';
import {ICarWithAuthModel} from "../Models/ICarWithAuthModel";
import carService from "../services/carService";
import CarsComponent from "../components/CarsComponent";

const CarsPage = () => {
    const [carsObj, setCarsObj] = useState<ICarWithAuthModel[]>([])
    useEffect(() => {
carService.getCars().then(items => {
    if (items){
        setCarsObj(items)
    }
})
    }, []);
    return (
        <div>
            <p>cars page</p>
            <CarsComponent cars={carsObj}/>



        </div>
    );
};

export default CarsPage;