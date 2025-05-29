export interface InventoryType{
    id:number;
    name:string;//
    category:string;//
    count:number;//
    prices:number;//
    total:number;
    date:string;//
    balance:string;//
    desc:string;
}
export interface InventoryInitialState{
    inventory:InventoryType[];
}
export interface HistoryType{
    id:number;
    desc:string;
    date:string;
    name:string;
    balance:string;
    total:number;
}
export interface HistoryInitialState{
    history:HistoryType[];
}

export interface WorkersType{
    id:number;
    desc:string;
    date:string;//
    name:string;//
    email:string;//
    number:number;//
    position:string;//
    department:string;//
    place:string;//
    salary:number;//
}
export interface WorkerInitialState{
    workers:WorkersType[];
}