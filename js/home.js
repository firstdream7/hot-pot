//导航栏
const btnNav = document.querySelector(".btn-moblie-nav");
const headEl = document.querySelector(".head-nav ");
btnNav.addEventListener("click", function () {
  headEl.classList.toggle("nav-open");
});

// 价格栏;
const priceShow = document.querySelectorAll(".ph-caret-up");
const priceClose = document.querySelectorAll(".ph-caret-down");
const priceBox = document.querySelectorAll(".pricing-box");
for (let i = 0; i < priceShow.length; i++) {
  priceShow[i].addEventListener("click", function () {
    priceBox[i].classList.add("hidden-element");
  });
}

for (let i = 0; i < priceClose.length; i++) {
  priceClose[i].addEventListener("click", function () {
    priceBox[i].classList.remove("hidden-element");
  });
}
