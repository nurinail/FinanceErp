export interface BaseEntity {
  id: number;
  name: string;
  date: string;
  desc: string;
  transaction: "nağd" | "bank hesabı" | "borc";
}

export interface EmployeeType extends BaseEntity {
  fullname: string;
  email: string;
  phoneNumber: any;
  position: string;
  salary: any;
  department: string;
  workplace: "office" | "remote" | "hybrid";
}
export interface InventoryType extends BaseEntity {
  count: number;
  prices: number;
  category: string;
  total: number;
}
export interface ChangedInventory{
  count:number;
  prices:number;
  total:number;
}
export interface SalesType extends BaseEntity {
  productname: string;
  customerName: string;
  prices: number;
  notes: string;
}
export interface ProductState {
  inventory: InventoryType[];
  sales: SalesType[];
  products: string[];
}
export interface EmployeeInitialState {
  workers: EmployeeType[];
  isWorkerTable: boolean;
}
