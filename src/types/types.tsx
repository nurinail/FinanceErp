export interface InventoryType{
    id:number;
    name:string;//
    category:string;//
    count:number;//
    prices:number;//
    total:number;
    date:string;//
    method:string;//
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
    method:string;
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

export interface OrderType{
    id:number;
    ordernumber:number;
    customer:string;//
    product:string;//
    method:string;//
    desc:string;
    date:string;//
    total:number;
    count:number;//
    prices:number;//
    note:string;//
}
export interface OrderInitialState{
    orders:OrderType[];
    customers:CustomerType[];
}
export interface CustomerType{
    id:number;
    name:string;
    contract:string;
    document:string;
    date:string;
}
export interface FinanceInitialState{
    cashAmount:number;
    bankAmount:number;
    debitorAmount:number;
    liabilityAmount:number;
}
export interface PaymentMetodType{
    amount:number;
    method:string;
}


