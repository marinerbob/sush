import { BaseAPI } from './types';

export class ProductAPI {
  constructor(private api: BaseAPI) {}

  async getTypes() {
    return this.api.client.get('/product_types');
  }
}
