import { apiDummyJSON } from '../services/api';

export async function fetchAllProducts() {
  const result = await apiDummyJSON.get('/products');
  return result;
}
