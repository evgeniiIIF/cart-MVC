/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/elements/card.js":
/*!****************************************!*\
  !*** ./src/assets/js/elements/card.js ***!
  \****************************************/
/***/ (() => {



(function () {
  identifyDevice();
  function identifyDevice() {
    var isMobile = {
      Android: function Android() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function Opera() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function Windows() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function any() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      }
    };
    var body = document.body;
    window.addEventListener("resize", watchDevice);
    watchDevice();
    function watchDevice() {
      var cardsElement = document.querySelector(".js-cards");
      if (isMobile.any()) {
        if (body.classList.contains("pc")) {
          body.classList.remove("pc");
        }
        body.classList.add("mobile");
        cardsElement.addEventListener("click", showCardControl);
      } else {
        if (body.classList.contains("mobile")) {
          body.classList.remove("mobile");
        }
        body.classList.add("pc");
        cardsElement.removeEventListener("click", showCardControl);
      }
    }
    var prevCard;
    function showCardControl(e) {
      var card = e.target.closest(".card");
      if (card) {
        if (e.target.closest(".card__button")) {
          return;
        }
        card.classList.toggle("card--show-control");
      }
      if (prevCard && prevCard !== card) {
        prevCard.classList.remove("card--show-control");
      }
      console.log();
      prevCard = card;
    }
  }
})();

/***/ }),

/***/ "./src/assets/js/elements/cart.js":
/*!****************************************!*\
  !*** ./src/assets/js/elements/cart.js ***!
  \****************************************/
/***/ (() => {



(function () {
  var view = {
    cartRender: function cartRender(cart) {
      var sidebarCartList = document.querySelector(".js-sidebar-cart__list");
      var sidebarCartCount = document.querySelector(".js-sidebar-cart__count");
      var allProductsString = "";
      cart.forEach(function (item, index) {
        var templateProduct = "\n\t\t\t\t\t<li class=\"sidebar-cart__item\">\n\t\t\t\t\t\t<div class=\"sidebar-cart__product sidebar-product\" data-id='".concat(index, "'>\n\t\t\t\t\t\t\t<h4 class=\"sidebar-product__title\">").concat(item.title, "</h4>\n\t\t\t\t\t\t\t<div class=\"sidebar-product__close-btn\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t");
        allProductsString += templateProduct;
      });
      sidebarCartList.innerHTML = allProductsString;
      sidebarCartCount.innerHTML = cart.length;
    }
  };
  var model = {
    cart: [],
    writeProductDataToCart: function writeProductDataToCart(data) {
      this.cart.push(data);
    },
    removeProductDataFromCart: function removeProductDataFromCart(product) {
      this.cart.forEach(function (item, index, arr) {
        if (product.dataset.id == index) {
          arr.splice(index, 1);
        }
      });
    }
  };
  var controller = {
    addProductToSidebarCart: function addProductToSidebarCart(e) {
      var productData = {};
      var cardButton = e.target.closest(".card__button");
      if (cardButton) {
        var card = cardButton.closest(".card");
        productData.title = card.querySelector(".card__link").textContent;
        model.writeProductDataToCart(productData);
        view.cartRender(model.cart);
      }
    },
    removeProductFromSidebarCart: function removeProductFromSidebarCart(e) {
      var sidebarCloseButton = e.target.closest(".sidebar-product__close-btn");
      if (sidebarCloseButton) {
        var product = sidebarCloseButton.closest(".sidebar-product");
        model.removeProductDataFromCart(product);
        view.cartRender(model.cart);
      }
    }
  };
  var app = {
    init: function init() {
      this.event();
    },
    event: function event() {
      var catalog = document.querySelector(".js-catalog");
      var sidebarCart = document.querySelector(".js-sidebar-cart");
      catalog.addEventListener("click", controller.addProductToSidebarCart);
      sidebarCart.addEventListener("click", controller.removeProductFromSidebarCart);
    }
  };
  app.init();
})();

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/card */ "./src/assets/js/elements/card.js");
/* harmony import */ var _elements_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elements_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/cart */ "./src/assets/js/elements/cart.js");
/* harmony import */ var _elements_cart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elements_cart__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/main": 0,
/******/ 			"assets/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktest"] = self["webpackChunktest"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/main"], () => (__webpack_require__("./src/assets/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/main"], () => (__webpack_require__("./src/assets/sass/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;