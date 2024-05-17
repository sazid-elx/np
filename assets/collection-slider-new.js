
function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
  let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
  if (timer <= 0) return;
  (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

waitForElem("#CollectionAjaxContent", (element) => {
  if (element) {

    let filterButton = {
      init: function() {
        this.mainCss();
        this.mainJs();
      },
      mainCss: function() {
        var styles = document.createElement("style");
        styles.setAttribute("type", "text/css");
        document.head.appendChild(styles).textContent =
          "" +
          /* CSS will be imported here */
          "";
      },
      mainJs: function() {
        console.log("tab-filter");
 function applySwiperSlider(){
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
        simulateTouch: false
      }
    }
    });
 }

function applyClickEventForMobileSorting() {
    var target = document.querySelector(".sort-btn-mobile")
    target.addEventListener('click', ()=>{
      // sorting
      if (document.querySelector(".sort-list-mobile").classList.contains('show-sort-list')){
        document.querySelector(".sort-list-mobile").classList.remove('show-sort-list')
      }
      else {
        document.querySelector(".sort-list-mobile").classList.add('show-sort-list')
      }
    })
  }
 
function sizeFilterRemoval() {
  var sizeFilters = document.querySelectorAll(".active.size-filter")
  sizeFilters.forEach(item=>{
    item.addEventListener("click", (e)=>{
      e.preventDefault()
      if (e.target.dataset.url.includes("option.size")){
        var tempUrl = e.target.dataset.url
      }
      else {
        var tempUrl = e.target.dataset.url.replace("&filter.v.availability=1", "")
      }
      var index = tempUrl.indexOf("?")
      var length = tempUrl.length
      var newParam = tempUrl.substr(index, length-1)
      if (newParam === '?filter.v.availability=1'){
        window.location.search = ""
      }
      else {
        window.location.search = newParam
      }
    })
  })
}

function sizeFilterAddition(){
  var sizeFilters = document.querySelectorAll(".inactive.size-filter")
  sizeFilters.forEach(item=>{
    item.addEventListener("click", (e)=>{
      e.preventDefault()
      var url;
      if (e.target.dataset.url.includes("availability")){
        url = e.target.dataset.url
      }
      else {
        url = e.target.dataset.url + "&filter.v.availability=1"
      }
      var tempUrl = url
      var index = tempUrl.indexOf("?")
      var length = tempUrl.length
      var newParam = tempUrl.substr(index, length-1)
      window.location.search = newParam
    })
  })
}

function showClearFilter(){
    const activeFilters = document.querySelectorAll(".active-filter-item")
    if (activeFilters.length > 0) document.querySelector(".active-filter-clear-item").classList.remove("dont-show")
}
  function resetFilter(){
    var target = document.querySelector(".filter-reset")
    if (target) {
      target.addEventListener('click', ()=>{
      window.location.search = ""
    })
    }
  }
  function sortingFunctionWithoutMultipleOptions(){
    var sortItems = document.querySelectorAll(".sort-list-item")
    sortItems.forEach(item=>{
      item.addEventListener('click', (e)=>{
        let url = "";
        if (window.location.search.indexOf("filter") === -1){
          url += `?sort_by=${e.target.dataset.name}`
        }
        else {
          var index = window.location.search.indexOf("sort_by")
          switch (index) {
            case -1: url += window.location.search + `&sort_by=${e.target.dataset.name}`; break;
            default:
              var initIndex = window.location.search.indexOf("sort_by")
              var toBeReplaced = window.location.search.slice(initIndex)
              url += window.location.search.replace(toBeReplaced, `sort_by=${e.target.dataset.name}`)
          }
        }
        window.location.search = url
      })
    })
  }
  function sortingFunctionWithMultipleOptions(){
    var sortItems = document.querySelectorAll(".sort-list-item")
    sortItems.forEach(item=>{
      item.addEventListener('click', (e)=>{
        let url = "";
        if (window.location.search.indexOf("filter") === -1){
          var index = window.location.search.indexOf("sort_by")
          switch (index) {
            case -1: url += `?sort_by=${e.target.dataset.name}`; break;
            default: url = window.location.search + `&sort_by=${e.target.dataset.name}`;
          }
        }
        else {
          url += window.location.search + `&sort_by=${e.target.dataset.name}`
        }
        window.location.search = url
      })
    })
  }
  function applyClickEventForFilter() {
    document.querySelectorAll(".filter-label").forEach(label=>{
      label.addEventListener('click', (event)=> {
        var className = `${event.target.classList[1]}-options`
        var target = document.querySelector(`.${className}`)
        var sortingList = document.querySelector(".sort-list")
        if (target.classList.contains("show-filter")){
          target.classList.remove("show-filter")
        }
        else {
          target.classList.add("show-filter")
          document.querySelectorAll(".filter-options-list").forEach(item => {
            if (item !== target) item.classList.remove("show-filter");
          })
        }
        if (sortingList.classList.contains("show-sort-list")) {
          sortingList.classList.remove("show-sort-list")
        }
      })
    })
  }
  function applyClickEventForSorting() {
    var target = document.querySelector(".sorting-section .sort-btn")
    if (target) {
        target.addEventListener('click', ()=>{
        // sorting
        document.querySelectorAll(".filter-options-list").forEach(option=>{
          if (option.classList.contains("show-filter")) {
            option.classList.remove("show-filter")
          }
        })
  
        if (document.querySelector(".sort-list").classList.contains('show-sort-list')){
          document.querySelector(".sort-list").classList.remove('show-sort-list')
        }
        else {
          document.querySelector(".sort-list").classList.add('show-sort-list')
        }
      })
    }
    
  }
  function removeFilterOptionList(){
    var topBarFilterSection = document.querySelector(".topbar-filter-section")
    if (topBarFilterSection) {
      topBarFilterSection.addEventListener('click', (e)=>{
      if (e.target !== topBarFilterSection) return false
      document.querySelectorAll(".filter-options-list").forEach(item => {
        item.classList.remove("show-filter")
      })
    })
    }
  }

  function checkForActiveFilters(){
    const target = document.querySelector(".topbar-active-filter-section")
    if (target) {
      if (window.location.search.indexOf("filter") != -1){
      target.classList.remove("hide")
    }
    else {
      target.classList.add("hide")
    }
    }
  }
        
function showArrow() {
  if (window.innerWidth > 768) {
    const links = document.querySelectorAll(".grid-product__link");
    
    links.forEach(link => {
      link.addEventListener("mouseover", (e) => {
         e.target.closest(".grid__item.grid-product").querySelector(".swiper-button-next").classList.add("show-arrow");
         e.target.closest(".grid__item.grid-product").querySelector(".swiper-button-prev").classList.add("show-arrow");
      });
      
      link.addEventListener("mouseleave", (e) => {
        e.target.closest(".grid__item.grid-product").querySelector(".swiper-button-next").classList.remove("show-arrow");
        e.target.closest(".grid__item.grid-product").querySelector(".swiper-button-prev").classList.remove("show-arrow");

      });
    });
 
}
}

function categoryTab(){
  setTimeout(function() {
  document.querySelector('.filter-form.collection-category-tab .collection-category-tab-wrapper .no-bullets').scrollTo({
    left: document.querySelector('.filter-form.collection-category-tab .collection-category-tab-wrapper .no-bullets .tag.tag--active').offsetLeft - (document.querySelector('.filter-form.collection-category-tab .collection-category-tab-wrapper .no-bullets').clientWidth / 2) + (document.querySelector('.filter-form.collection-category-tab .collection-category-tab-wrapper .no-bullets .tag.tag--active').clientWidth / 2),
    // document.querySelector(".filter-form.collection-category-tab .collection-category-tab-wrapper .no-bullets .tag.tag--active").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  });
}, 300);
}        
     
  applyClickEventForMobileSorting();
  applyClickEventForFilter();
  applyClickEventForSorting();
  sortingFunctionWithoutMultipleOptions();
  resetFilter();
  removeFilterOptionList();
  showClearFilter();
  sizeFilterRemoval();
  sizeFilterAddition();
  checkForActiveFilters();
  applySwiperSlider();
  showArrow();
  categoryTab();     

let target = document.querySelector("#CollectionAjaxContent");
let observer = new MutationObserver(function() {


  applySwiperSlider();
  applyClickEventForMobileSorting();
  applyClickEventForFilter();
  applyClickEventForSorting();
  sortingFunctionWithoutMultipleOptions();
  resetFilter();
  removeFilterOptionList();
  showClearFilter();
  sizeFilterRemoval();
  sizeFilterAddition();
  checkForActiveFilters();
  showArrow();
  categoryTab();
});
observer.observe(target, {
  childList: true,
});
},
};

    filterButton.init();
  }
});


 