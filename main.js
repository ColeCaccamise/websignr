const navbar = document.querySelector(".navbar");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const textarea = document.querySelector(".textarea");
const btn = document.querySelector(".btn.btn-submit");

// add shadow to navbar
window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.add("navbar-shadow");
  } else {
    navbar.classList.remove("navbar-shadow");
  }
};

const shake = () => {
  if (name.value == "" || email.value == "" || textarea.value == "") {
    btn.classList.add("redBtn");
  }
  setTimeout(() => {
    btn.classList.remove("redBtn");
  }, 820);
};
