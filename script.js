const hamburgetBtn = document.querySelector(".navbar-button i");
const navList = document.querySelector(".nav__list");

hamburgetBtn.addEventListener("click", function (e) {
  let { currentTarget } = e;

  if (currentTarget.classList.contains("fa-bars")) {
    currentTarget.classList.remove("fa-bars");

    currentTarget.classList.add("fa-times");
    navList.classList.add("showNav");
  } else if (currentTarget.classList.contains("fa-times")) {
    currentTarget.classList.remove("fa-times");
    currentTarget.classList.add("fa-bars");
    navList.classList.add("hidden");
    navList.classList.remove("showNav");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    navList.classList.remove("hidden");
    navList.classList.remove("showNav");
  }
});
