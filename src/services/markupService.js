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
    .join("");
}

export function markupSingleProduct({ brand, images, price }) {
  return `
      <p>${brand}</p>
      <img src="${images[0]}">
      <p>${price}</p>
        `;
}

export function markupNewProduct({ title, description, price }) {
  return `
      <p>${title}</p>
      <p>${description}</p>
      <p>${price}</p>
        `;
}

export function markupInfoUser(users) {
 return users.map(({firstName, lastName, email, image}) => `<li><img src="${image}" alt="">
 <p>firstName: ${firstName}</p>
 <p>lastName: ${lastName}</p>
 <p>email: ${email}</p>
</li>`).join('')

  
}