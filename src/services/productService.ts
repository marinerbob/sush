import { Product } from '@server/data/types';
import { observable } from 'mobx';
import { RequestStatus } from './types';

export default class ProductService {
  @observable products: Product[] = [];

  @observable loadingStatus = RequestStatus.SUCCESS;

  loadProducts() {
    this.loadingStatus = RequestStatus.START;
  }
}
