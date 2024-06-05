import React, {FC} from 'react';
import CarComponent from "./CarComponent";
import {ICarWithAuthModel} from "../Models/ICarWithAuthModel";

interface IProps {
    cars:ICarWithAuthModel[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    console.log(cars)
    return (
        <div>
            <p>cars component</p>
            {cars.map(car => <CarComponent key={car.id} car={car}/>)}


        </div>
    );
};

export default CarsComponent;