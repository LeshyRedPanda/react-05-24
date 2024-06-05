import React, {useEffect, useState} from 'react';
import carService from "../services/carService";
import CarsComponent from "../components/CarsComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";
import authService from "../services/authService";
import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";
import PaginationComponent from "../components/PaginationComponent";

const CarsPage = () => {
    const navigate = useNavigate()

    const [query, setQuery] = useSearchParams({page: '1'});
    const [carsObj, setCarsObj] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });


    useEffect(() => {
        const getCarsData = async () => {
            try {
                const response = await carService.getCars(query.get('page') || '1');
                if (response) {
                    setCarsObj(response)
                }
            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh()
                    } catch (e) {
                        return navigate('/')
                    }
                    const response = await carService.getCars(query.get('page') || '1');
                    if (response) {
                        setCarsObj(response)
                    }
                }
            }
        }
        getCarsData();
    }, [query]) // deps[query] -


    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...carsObj.prev})
                break;
            case 'next':
                setQuery({...carsObj.next})
                break;
        }
    };

    return (
        <div>
            <hr/>
            <PaginationComponent changePage={changePage} next={carsObj.next} prev={carsObj.prev}/>
            <hr/>
            <CarsComponent cars={carsObj.items}/>
        </div>
    );
};


export default CarsPage;