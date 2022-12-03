"use strict";
(function () {
  identifyDevice();

  function identifyDevice() {
    const isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      },
    };

    const body = document.body;

    window.addEventListener("resize", watchDevice);
    watchDevice();

    function watchDevice() {
      const cardsElement = document.querySelector(".js-cards");

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

    let prevCard;

    function showCardControl(e) {
      const card = e.target.closest(".card");

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
