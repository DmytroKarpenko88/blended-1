import './styles/normalize.css';
import './styles/index.css';
import { fetchAllProducts } from './requests/products';
import { markupAllProducts } from './services/markupService';

const allProductsRef = document.querySelector('#allProducts');

async function renderAllProducts() {
  try {
    const {
      data: { products },
    } = await fetchAllProducts();

    allProductsRef.innerHTML = markupAllProducts(products);
  } catch (error) {
    console.log(error.message);
  }
}

renderAllProducts();
