import { apiDummyJSON } from "../services/api";

export async function fetchAllProducts() {
  const result = await apiDummyJSON.get("/products");
  return result;
}

export async function fetchProductById(id) {
  const result = await apiDummyJSON.get(`/products/${id}`);
  return result;
}

export async function fetchNewProduct(newProduct) {
  const result = await apiDummyJSON.post(`/products/add`, newProduct);
  return result;
}

export async function fetchDeleteProductById(id) {
  const result = await apiDummyJSON.delete(`/products/${id}`);
  return result;
}
