window.addEventListener("DOMContentLoaded", () => {
  /* ----------- Переключение табов ---------- */

  let tabsBtn = document.querySelectorAll(".course_tab");
  let tabsItems = document.querySelectorAll(".course_inner");

  tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("active");
        });

        tabsItems.forEach(function (item) {
          item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  });

  /* ----------- Слайдер ---------- */

  let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      1100: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  // let container = document.querySelector(".swiper");
  // let images = container.querySelectorAll("img");
  // images[0].classList.add("semiopacity");
  // images[images.length - 1].classList.add("semiopacity");
});
