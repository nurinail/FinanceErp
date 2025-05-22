export interface EmployeeInitialState{
    workers:EmployeeType[],
}
export interface EmployeeType{
 id: number ,
  fullname:string,
  email:string,
  phoneNumber:number ,
  position:string,
  salary:number ,
  date:any,
  department:string,
  workplace:"office" | "remote" | "hybrid",
}
