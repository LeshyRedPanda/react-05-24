import React, {FC} from "react";
import {IPaginatedPageModel} from "../Models/IPaginatedPageModel";


interface IProps {
    changePage: (action: string) => void
    next: IPaginatedPageModel | null;
    prev: IPaginatedPageModel | null;
}

const PaginationComponent: FC<IProps> = ({changePage,next,prev}) => {
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