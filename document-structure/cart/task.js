document.addEventListener("DOMContentLoaded", () => {
    const cartProducts = document.querySelector(".cart__products");
    const productItems = document.querySelectorAll(".product");
  
    // Функция для добавления товара в корзину
    function addToCart(product) {
      const productId = product.getAttribute("data-id");
      const cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
  
      const productTitle = product.querySelector(".product__title").textContent;
      const productImageSrc = product.querySelector(".product__image").getAttribute("src");
      const productQuantity = parseInt(product.querySelector(".product__quantity-value").textContent);
  
      if (!cartProduct) {
        const cartProductItem = document.createElement("div");
        cartProductItem.classList.add("cart__product");
        cartProductItem.setAttribute("data-id", productId);
  
        const cartProductImage = document.createElement("img");
        cartProductImage.classList.add("cart__product-image");
        cartProductImage.setAttribute("src", productImageSrc);
  
        const cartProductCount = document.createElement("div");
        cartProductCount.classList.add("cart__product-count");
        cartProductCount.textContent = productQuantity;
  
        cartProductItem.appendChild(cartProductImage);
        cartProductItem.appendChild(cartProductCount);
        cartProducts.appendChild(cartProductItem);
      } else {
        const cartProductCount = cartProduct.querySelector(".cart__product-count");
        const currentCount = parseInt(cartProductCount.textContent);
        cartProductCount.textContent = currentCount + productQuantity;
      }
    }
  
    // Обработчик кнопки "Добавить в корзину"
    productItems.forEach((product) => {
      const addToCartButton = product.querySelector(".product__add");
      addToCartButton.addEventListener("click", () => {
        addToCart(product);
      });
    });
  
    // Обработчики кнопок увеличения и уменьшения количества товаров
    productItems.forEach((product) => {
      const quantityValue = product.querySelector(".product__quantity-value");
      const incButton = product.querySelector(".product__quantity-control_inc");
      const decButton = product.querySelector(".product__quantity-control_dec");
  
      incButton.addEventListener("click", () => {
        let value = parseInt(quantityValue.textContent);
        if (!isNaN(value)) {
          value++;
          quantityValue.textContent = value;
        }
      });
  
      decButton.addEventListener("click", () => {
        let value = parseInt(quantityValue.textContent);
        if (!isNaN(value) && value > 1) {
          value--;
          quantityValue.textContent = value;
        }
      });
    });
  });