let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

let imgContainer = document.querySelector(".img-container");

setInterval(() => {
  let last = imgContainer.firstElementChild;
  last.remove();
  imgContainer.appendChild(last);
}, 2500);

