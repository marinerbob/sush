import { observable } from 'mobx';

import { Ingredient } from './ingredient';

export type Product = {
  id: string;
  title: string;
  ingredients: Ingredient[];
  price: number;
};

export class ProductModel {
  @observable id: string;

  @observable title: string;

  @observable price: number;

  @observable ingredients: Ingredient[];

  constructor(product: Product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.ingredients = product.ingredients;
  }
}
