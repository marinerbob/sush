import { Discount, Product, ProductComponent, ProductType } from '@server/data/types';

export default class ProductModel implements Product {
  id: string;

  name: string;

  description?: string;

  components?: ProductComponent[];

  portion: number;

  weight: number;

  discount?: Discount;

  price: number;

  type: ProductType;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.components = product.components;
    this.portion = product.portion;
    this.weight = product.weight;
    this.discount = product.discount;
    this.price = product.price;
    this.type = product.type;
  }
}
