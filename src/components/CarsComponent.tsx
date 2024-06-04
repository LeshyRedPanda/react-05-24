import React, {FC} from 'react';
import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";

interface IProps {
    cars:ICarPaginatedModel[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    console.log(cars)
    return (
        <div>


        </div>
    );
};

export default CarsComponent;