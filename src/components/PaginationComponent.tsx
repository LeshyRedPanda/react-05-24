import React, {FC} from "react";
import {IPaginatedPageModel} from "../Models/IPaginatedPageModel";
import {useSearchParams} from "react-router-dom";


interface IProps {
    next: IPaginatedPageModel | null;
    prev: IPaginatedPageModel | null;
}

const PaginationComponent: FC<IProps> = ({next, prev}) => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...prev})
                break;
            case 'next':
                setQuery({...next})
                break;
        }
    };

    return (
        <div>
            <button onClick={() => {
                changePage('prev');
            }}
                    disabled={!prev}
            >previous page
            </button>
            <button onClick={() => {
                changePage('next');
            }}
                    disabled={!next}
            >next page
            </button>
        </div>
    )

}

export default PaginationComponent;