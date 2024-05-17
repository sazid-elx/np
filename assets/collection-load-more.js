class PaginateButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", (e) => {
      e.target.classList.add("btn--loading");

      let url = e.target.dataset.url;
      PaginateButton.renderSectionFromFetch(url);
    });
  }

  static renderSectionFromFetch(url) {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const parsedHTML = new DOMParser().parseFromString(
          responseText,
          "text/html"
        );

        PaginateButton.getSectionsToRender().forEach((section) => {
          const elementToChange = section.selector;

          if (section.needToDo === "inject") {
            const html = parsedHTML.querySelector(elementToChange).innerHTML;
            PaginateButton.renderSection(html, elementToChange);
          } else if (section.needToDo === "replace") {
            const html = parsedHTML.querySelector(elementToChange)
              ? parsedHTML.querySelector(elementToChange).innerHTML
              : "";
            PaginateButton.replaceSection(html, elementToChange);
          }
        });
      });
  }

  static renderSection(html, elm) {
    document.querySelector(elm).insertAdjacentHTML("beforeend", html);
    applySwiperSlider();
  }

  static replaceSection(html, elm) {
    document.querySelector(elm).innerHTML = html;
  }

  static getSectionsToRender() {
    return [
      {
        selector: ".collection-grid__wrapper .grid.grid--uniform",
        needToDo: "inject",
      },
      {
        selector: "paginate-button",
        needToDo: "replace",
      },
    ];
  }
}

customElements.define("paginate-button", PaginateButton);

function applySwiperSlider() {
  var swiper = new Swiper(".np-plp-slider", {
    loop: true,
    //  allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // simulateTouch: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        allowSwipeToNext: false,
        allowSwipeToPrev: false,
        simulateTouch: false,
      },
    },
  });
}
