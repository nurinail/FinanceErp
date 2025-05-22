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
