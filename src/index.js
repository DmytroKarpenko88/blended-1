import "./styles/normalize.css";
import "./styles/index.css";
import {
  fetchAllProducts,
  fetchProductById,
  fetchNewProduct,
  fetchDeleteProductById,
} from "./requests/products";
import {
  markupAllProducts,
  markupSingleProduct,
  markupNewProduct,
} from "./services/markupService";

const allProductsRef = document.querySelector("#allProducts");

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

const submitBtn = document.querySelector("#singleProductForm");
const container = document.querySelector("#singleProduct");

submitBtn.addEventListener("submit", onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const value = e.target.elements.id.value;
  try {
    const { data } = await fetchProductById(value);

    container.innerHTML = markupSingleProduct(data);
  } catch (error) {
    console.log(error.message);
  }
}

// const refs = {
//   form: document.querySelector("#newProduct"),
//   newProductSection: document.querySelector("#newProductSection"),
// };

// refs.form.addEventListener("submit", addProduct);

async function addProduct(event) {
  event.preventDefault();
  try {
    const {
      price: { value: price },
      description: { value: description },
      title: { value: title },
    } = event.target.elements;

    const { data } = await fetchNewProduct({ price, description, title });
    refs.newProductSection.innerHTML = markupNewProduct(data);
  } catch (error) {
    console.log(error.message);
  }
}

const refs = {
  form: document.querySelector('#deletionProductForm'),
}

refs.form.addEventListener('submit', onDeleteProduct);

async function onDeleteProduct(e) {
  e.preventDefault();

  const value = e.target.elements.deletionId.value;

  try {
    const { data } = await fetchDeleteProductById(value);

    console.log(data);

    if (data.isDeleted) {
      alert(`message: SUCCESS product with id: ${data.id} has been removed`);
    } 
  } catch (error) {
    alert(`message: ERROR`);
  }
}