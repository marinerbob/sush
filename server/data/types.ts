export type ProductType = {
  id: string;
  name: string;
};

export type ProductComponent = {
  id: string;
  name: string;
  description?: string;
};

export type Discount = {
  id: string;
  name: string;
  description?: string;
  percent: number;
  promocode: string;
  is_active: boolean;
  start_date: string;
  end_date: string;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  portion: number;
  weight: number;
  type: ProductType;
  components?: ProductComponent[];
  discount?: Discount;
};
