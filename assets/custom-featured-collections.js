const quickLookBtns = document.querySelectorAll(".quick-look-btn");

// function getQuickLookSection(html) {
//   fetch("/?section_id=template--22947529687321__quick_look_k4Paiq")
//     .then((res) => res.text())
//     .then((resText) => {
//       const newHTML = new DOMParser()
//         .parseFromString(resText, "text/html")a
//         .querySelector(".quick-look__content-wrapper");
//       console.log(newHTML);
//     });
// }

// getQuickLookSection();

quickLookBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    fetch(this.dataset.url)
      .then((res) => res.text())
      .then((resText) => {
        const newHTML = new DOMParser()
          .parseFromString(resText, "text/html")
          .querySelector(`[data-url='${this.dataset.url}']`);
        console.log(newHTML);
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
