changeLang();

function changeLang() {
  window.addEventListener("DOMContentLoaded", (event) => {
    if (getCookie("lang") == null) {
      document.cookie = "lang=en";
    }
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", getCookie("lang"));

    contentLanguageChange(getCookie("lang"));
  });

  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.addEventListener("click", function () {
      var elementDataLang = element.getAttribute("data-lang");

      document.cookie = "lang=" + elementDataLang;

      document
        .getElementsByTagName("html")[0]
        .setAttribute("lang", getCookie("lang"));

      contentLanguageChange(element.getAttribute("data-lang"));
      window.location.reload();
    });
  });
}

function contentLanguageChange(lang) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    let key = element.getAttribute("data-key");
    if (key) {
      fetch("app/language/language.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          element.textContent = data.languages[lang].strings[key];
        });
    }
  });
}

// cookie ismine göre arama yapıyor varsa geriye cookie değeri dönüyor
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// $(window).on("load", function () {
//   $(".load").delay(2500).fadeOut("slow");
// });

const body =document.querySelector("#bg__container");
console.log (body);
const menu_btn = document.querySelector(".hamburger"),

  mobile_menu = document.querySelector(".mobile__nav"),
  logo_color = document.querySelector("#logo");

  menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  body.classList.toggle("overdene");
});


// slider  <!-- teknoloji -->
var swiper = new Swiper(".teknoloji", {
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

// slider  <!-- blog -->

var swiper = new Swiper(".mySwiper", {
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
