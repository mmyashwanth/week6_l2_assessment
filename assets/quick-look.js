const closeBtn = document.querySelector(".quick-look__close-btn");

closeBtn.addEventListener("click", function () {
  document.querySelector(".quick-look__wrapper").classList.remove("active");
  document.body.style.overflow = "auto";
});
