import { Ingredient } from './ingredient';

export type Product = {
  id: string;
  title: string;
  ingredients: Ingredient[];
  price: number;
};

export class ProductModel {
  constructor();
}
