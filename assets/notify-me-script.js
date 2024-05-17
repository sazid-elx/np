// console.log("outside function")
window.waitForElem =
  window.waitForElem ||
  ((waitFor, callback, minElements = 1, variable = false) => {
    function checkElements() {
      if (variable) {
        return waitFor;
      } else {
        return window.document.querySelectorAll(waitFor);
      }
    }

    var thisElem = checkElements(),
      timeOut;
    if (
      (!variable && thisElem.length >= minElements) ||
      (variable && typeof thisElem !== "undefined")
    ) {
      return callback(thisElem);
    } else {
      var interval = setInterval(function () {
        thisElem = checkElements();
        if (
          (!variable && thisElem.length >= minElements) ||
          (variable && typeof thisElem !== "undefined")
        ) {
          clearInterval(interval);
          clearTimeout(timeOut);
          return callback(thisElem);
        }
      }, 2000);
      timeOut = setTimeout(function () {
        
        clearInterval(interval);
        return callback(false);
      }, 200000);
    }
  });

waitForElem(".swym-button-bar", (mainContent) => {
  if (mainContent) {
    let echoVariation = {
      init: function () {
        this.mainCss();
        this.mainJs();
      },
      mainCss: function () {
        var styles = document.createElement("style");
        styles.setAttribute("type", "text/css");
        document.head.appendChild(styles).textContent = `
          `;
      },
      mainJs: function () {

// console.log("inside function")

          let target = document.querySelector(".swym-modals-container");
        let flagX = true;
        let observer = new MutationObserver(function() {
          // console.log("inside observer");
          if(!flagX) {
            flagX = true;
            return;
          }
          
          waitForElem("#swym-remind-me-subscribed-success", (e) => {
                  if(e) {
                    if(document.querySelector(".swym-title h2")){
                      flagX = false;
                      document.querySelector(".swym-title h2").innerText = "THANK YOU"
                    }
                  }
            })
        });
        observer.observe(target, {
          childList: true,
          subtree: true,
        });
        
      },
    };

    echoVariation.init();
  }
});
