// $(window).scroll(function () {
//      $(window).scrollTop()
//        ? $("nav").addClass("black")
//       : $("nav").removeClass("black");
//    });

  const menu_btn = document.querySelector(".hamburger"),
    mobile_menu = document.querySelector(".mobile__nav"),
    logo_color = document.querySelector("#logo");
  console.log(mobile_menu),
    menu_btn.addEventListener("click", function () {
      menu_btn.classList.toggle("is-active"),
        mobile_menu.classList.toggle("is-active"),
        logo_color.classList.toggle("is-active");
    });
