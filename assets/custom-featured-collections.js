const quickLookBtns = document.querySelectorAll(".quick-look-btn");

quickLookBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    fetch(this.dataset.url)
      .then((res) => res.text())
      .then((resText) => {
        const newHTML = new DOMParser()
          .parseFromString(resText, "text/html")
          .querySelector(`[data-url='${this.dataset.url}']`);
        const quickLookSection = document.querySelector(
          ".quick-look__content-wrapper"
        );
        document.querySelector(".quick-look__wrapper").classList.add("active");
        document.body.style.overflow = "hidden";
        quickLookSection.innerHTML = newHTML.innerHTML;
      });
  });
});

const swatchBtns = document.querySelectorAll(
  ".custom-featured-collections__color-variants"
);

swatchBtns.forEach((btn) =>
  btn.addEventListener("mouseover", function () {
    const siblings = Array.from(this.parentNode.children).filter(
      (child) => child !== this
    );
    siblings.forEach((sibling) => sibling.classList.remove("active"));
    this.classList.add("active");
  })
);
