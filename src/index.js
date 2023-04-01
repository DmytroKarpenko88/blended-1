import './styles/normalize.css';
import './styles/index.css';
import { fetchAllProducts, fetchProductById } from './requests/products';
import { markupAllProducts, markupSingleProduct } from './services/markupService';


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

// renderAllProducts();






const submitBtn = document.querySelector('#singleProductForm');
const container = document.querySelector('#singleProduct')

submitBtn.addEventListener('submit', onFormSubmit)

async function onFormSubmit(e) {
  e.preventDefault()
  const value = e.target.elements.id.value;
  const { data } = await fetchProductById(value);

  container.innerHTML = markupSingleProduct(data)
}
