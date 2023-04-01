export function markupAllProducts(products) {
  return products
    .map(({ brand, images, price }) => {
      return `
      <li class="item">
      <p>${brand}</p>
      <img src="${images[0]}">
      <p>${price}</p>
      </li>
        `;
    })
    .join('');
}

export function markupSingleProduct({ brand, images, price }) {
      return `
      <p>${brand}</p>
      <img src="${images[0]}">
      <p>${price}</p>
        `;
    }
    
