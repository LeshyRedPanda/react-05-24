import React, {FC} from 'react';
import {ICarWithAuthModel} from "../Models/ICarWithAuthModel";

interface IProps{
    car:ICarWithAuthModel
}

const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            <ul>
                <li> car id : {car.id}</li>
                <li> brand : {car.brand}</li>
                <li> year : {car.year}</li>
                <li> price : {car.price}</li>
                <br/><br/>
                <img className={'carImg'} src={car.photo} alt={car.brand}/>
            </ul>
            <hr/>
        </div>
    );
};

export default CarComponent;