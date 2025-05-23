export interface EmployeeInitialState{
    workers:EmployeeType[],
    isWorkerTable:boolean,
}
export interface EmployeeType{
 id: number ,
  fullname:string,
  email:string,
  phoneNumber:any  ,
  position:string,
  salary:any  ,
  date:any,
  department:string,
  workplace:"office" | "remote" | "hybrid" ,
}
export interface InventoryType{
  id:number;
  name:string;
  count:number;
  prices:number;
  category:string;
}
export interface SalesType{
  id:number;
  productname:string;
  customerName:string;
  date:string;
  prices:number;
  notes:string;
  paymentMethod:"cash"|"bankaccount"|"receivable";


}
export interface ERPState{
  inventory:InventoryType[];
  sales:SalesType[];
  
}
