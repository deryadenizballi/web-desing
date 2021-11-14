
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



function animation(){
  var controller = new ScrollMagic.Controller();


  const about =gsap.timeline({default: { ease: Expo.InOut  }});
   about.fromTo(
     ".header__content" ,
    1,
    {x:"-10rem" ,opacity: 0 }, 
    {x:0 ,opacity: 1});

 
  about.fromTo(
    ".header_img2",
    0.5,
    { x: "10rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );

  new ScrollMagic.Scene({
    triggerElement: ".about__container", // sende nereye gelince çalışacak bakalım
    triggerHook: 0.5,
    reverse: true,
  })
    .setTween(about)
    .addTo(controller);

    /////////////////////////////////////////////

    const templateContent = gsap.timeline({ defaults: { ease: Expo.InOut } });
    templateContent.fromTo(
      ".projet__cart",
      1,
      { y: "-5rem", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );
    templateContent.set(".projet__cart", { clearProps: "all" });
  
    new ScrollMagic.Scene({
      triggerElement: ".project__container",
      triggerHook: 0.5,
      reverse: true,
    })
      .setTween(templateContent)
      .addTo(controller);

}

// animation();

// $(window).scroll(function () {
//      $(window).scrollTop()
//         ? $("nav").addClass("black")
//        : $("nav").removeClass("black");
//    });

$(window).on("load", function () {
  $(".load").delay(2500).fadeOut("slow");
});
const menu_btn = document.querySelector(".hamburger"),
  mobile_menu = document.querySelector(".mobile__nav"),
  logo_color = document.querySelector("#logo");
  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active");
      logo_color.classList.toggle("is-active");
  });
