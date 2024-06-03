import React, {FC} from 'react';
import ICarWithAuthModel from "../models/ICarWithAuthModel";

interface IProps {
    car: ICarWithAuthModel
}

const CarComponent: FC<IProps> = ({car}) => {
    return (
        <div>
            <ul>
                <li>Car ID : {car.id}</li>
                <li>Brand : {car.brand}</li>
                <li>Year production : {car.year}</li>
                <li>Car price : {car.price}</li>
                <br/><br/>
                <img className={'carImg'} src={car.photo} alt={car.brand}/>
            </ul>
            <hr/>
        </div>
    );
};

export default CarComponent;