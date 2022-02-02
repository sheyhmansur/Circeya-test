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

  //-------------Swiper----------
  var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
