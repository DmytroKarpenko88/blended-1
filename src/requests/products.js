import { apiDummyJSON } from '../services/api';

export async function fetchAllProducts() {
  const result = await apiDummyJSON.get('/products');
  return result;
}


export async function fetchProductById(id) {
  const result = await apiDummyJSON.get(`/products/${id}`);
  return result
}
