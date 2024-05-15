import {TodosBasicModel} from "../basic-models/TodosBasicModel";

export interface TodosResponseModel{
    limit:number,
    skip:number,
    todos:TodosBasicModel[],
    total:number
}


