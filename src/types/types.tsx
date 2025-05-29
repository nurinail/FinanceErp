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