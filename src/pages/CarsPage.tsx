import React, {useEffect, useState} from 'react';
import carService from "../services/carService";
import CarsComponent from "../components/CarsComponent";
import ICarWithAuthModel from "../models/ICarWithAuthModel";


const CarsPage = () => {

    const [carsObj, setCarsObj] = useState<ICarWithAuthModel[]>([])

    useEffect(() => {
        carService.getCars().then(value => {
            if (value) {
                const {items} = value;
                setCarsObj(items)
            }
        })
    }, []);

    return (
        <div>
            <h2>Cars Page</h2>
            <CarsComponent cars={carsObj}/>
        </div>
    )
}

export default CarsPage;
