"use strict";

(function () {
  const view = {
    cartRender(cart) {
      const sidebarCartList = document.querySelector(".js-sidebar-cart__list");
      const sidebarCartCount = document.querySelector(".js-sidebar-cart__count");
      let allProductsString = ``;
      cart.forEach((item, index) => {
        let templateProduct = `
					<li class="sidebar-cart__item">
						<div class="sidebar-cart__product sidebar-product" data-id='${index}'>
							<h4 class="sidebar-product__title">${item.title}</h4>
							<div class="sidebar-product__close-btn"></div>
						</div>
					</li>
				`;
        allProductsString += templateProduct;
      });
      sidebarCartList.innerHTML = allProductsString;
      sidebarCartCount.innerHTML = cart.length;
    },
  };

  const model = {
    cart: [],

    writeProductDataToCart(data) {
      this.cart.push(data);
    },
    removeProductDataFromCart(product) {
      this.cart.forEach((item, index, arr) => {
        if (product.dataset.id == index) {
          arr.splice(index, 1);
        }
      });
    },
  };

  const controller = {
    addProductToSidebarCart(e) {
      const productData = {};
      const cardButton = e.target.closest(".card__button");
      if (cardButton) {
        const card = cardButton.closest(".card");
        productData.title = card.querySelector(".card__link").textContent;
        model.writeProductDataToCart(productData);
        view.cartRender(model.cart);
      }
    },
    removeProductFromSidebarCart(e) {
      const sidebarCloseButton = e.target.closest(".sidebar-product__close-btn");
      if (sidebarCloseButton) {
        const product = sidebarCloseButton.closest(".sidebar-product");
        model.removeProductDataFromCart(product);
        view.cartRender(model.cart);
      }
    },
  };

  const app = {
    init() {
      this.event();
    },

    event() {
      const catalog = document.querySelector(".js-catalog");
      const sidebarCart = document.querySelector(".js-sidebar-cart");

      catalog.addEventListener("click", controller.addProductToSidebarCart);
      sidebarCart.addEventListener("click", controller.removeProductFromSidebarCart);
    },
  };

  app.init();
})();
