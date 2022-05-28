import { IUser } from "./iuser";

export interface IBills {
  id: number;
  name: string;
  category: ICategory;
  subcategory: ISubCategory;
  user: IUser;
  amount: number;
  paid: boolean;
  due_date: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  status: boolean;
}

export interface ICategory {
  id: number;
  name: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface ISubCategory {
  id: number;
  name: string;
  category: ICategory
  created_at: Date;
  updated_at: Date;
  status: boolean;
  deleted_at: Date;
}