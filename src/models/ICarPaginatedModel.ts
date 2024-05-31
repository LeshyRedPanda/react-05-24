import ICarWithAuthModel from "./ICarWithAuthModel";

interface ICarPaginatedModel {
    total_items?:number,
    total_pages?:number,
    prev?:string,
    next?:string,
    items:ICarWithAuthModel[],
}

export default ICarPaginatedModel;