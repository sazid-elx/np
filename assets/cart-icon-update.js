function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 1000000, frequency = 25) {
  let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
  if (timer <= 0) return;
  (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

waitForElem(".cart__item", (element) => {
  if (element) {
    

    let itemCountFunction = {
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
        
        const itemCount =()=>{
          jQuery.getJSON('/cart.js', function(cart) {
           document.querySelectorAll(".site-nav .cart-item-count.cart-link__bubble").forEach(e=>{
             e.innerText= cart.item_count;
             if(e.innerText.length > 1){
               e.style.right="19%";
             }
           });

            // cart-drawer number count
          document.querySelector("#CartDrawerForm .drawer__fixed-header .drawer__header .drawer__title.np-h9 sup").textContent= cart.item_count;
          if( document.querySelector("#CartDrawerForm .drawer__fixed-header .drawer__header .drawer__title.np-h9 sup").textContent == "0" ){
                document.querySelector("#CartDrawerForm .drawer__fixed-header .drawer__header .drawer__title.np-h9 sup").textContent = "";
             }
          else{
            document.querySelector("#CartDrawerForm .drawer__fixed-header .drawer__header .drawer__title.np-h9 sup").textContent = cart.item_count;
          }
        
            // cart page number count
        if (window.location.href === "https://ninetypercent.com/cart"){
          document.querySelector(".template-cart .section-header.text-center .section-header__title sup").textContent= cart.item_count;
          if( document.querySelector(".template-cart .section-header.text-center .section-header__title sup").textContent == "0" ){
                document.querySelector(".template-cart .section-header.text-center .section-header__title sup").textContent = "";
             }
          else{
            document.querySelector(".template-cart .section-header.text-center .section-header__title sup").textContent = cart.item_count;
          }
        }
           

         
          } );
        }


        itemCount();
        
        let target = document.querySelector(".cart-items-wrapper-np");
            let observer = new MutationObserver(function() {
                itemCount();
            });
            observer.observe(target, {
                 childList: true,
              
            });
        
       
        if (location.href.indexOf("cart") > -1) {
            let target = document.querySelector(".cart__page-col");
            let observer = new MutationObserver(function() {
                itemCount();
            });
            observer.observe(target, {
                 childList: true,
                
            });
          }
      },
    };

    itemCountFunction.init();
  }
});