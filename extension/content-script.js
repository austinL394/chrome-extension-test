console.log("Here is the content script running");

function initWidget() {
  const cartFormElement = document.querySelector(".cart__ctas");
  console.log("cardform", { content: cartFormElement.innerHTML });
  const widget = document.createElement("div");
  widget.innerHTML = `
    <div class="si-widget" >
        <div class="si-widget-container">
        <div class="si-widget-flex-column left">
        
        
        <div class="si-text-container">
        <div class="si-header">
        Austin Widget
        <svg class="si-leaf-icon" width="12" height="13" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2199 2.69133C12.2137 2.5843 12.1684 2.48329 12.0925 2.40748C12.0167 2.33167 11.9157 2.28633 11.8087 2.28008C7.64533 2.03563 4.31049 3.28906 2.88861 5.64063C2.39575 6.44503 2.15288 7.37769 2.1908 8.32031C2.21555 8.9231 2.3382 9.51785 2.55393 10.0813C2.5666 10.1159 2.58785 10.1468 2.61568 10.1711C2.64352 10.1953 2.67704 10.2121 2.71312 10.2199C2.74921 10.2278 2.78668 10.2263 2.82205 10.2157C2.85742 10.2051 2.88954 10.1858 2.91541 10.1595L7.56385 5.43992C7.6045 5.39928 7.65275 5.36703 7.70586 5.34503C7.75897 5.32304 7.81589 5.31171 7.87338 5.31171C7.93086 5.31171 7.98779 5.32304 8.0409 5.34503C8.09401 5.36703 8.14226 5.39928 8.18291 5.43992C8.22356 5.48057 8.2558 5.52883 8.2778 5.58194C8.2998 5.63505 8.31112 5.69197 8.31112 5.74946C8.31112 5.80694 8.2998 5.86386 8.2778 5.91697C8.2558 5.97008 8.22356 6.01834 8.18291 6.05899L3.10299 11.2155L2.32697 11.9915C2.24627 12.0701 2.19809 12.1761 2.19201 12.2886C2.18593 12.4011 2.2224 12.5117 2.29416 12.5985C2.33346 12.644 2.38173 12.681 2.43594 12.707C2.49015 12.733 2.54914 12.7476 2.60923 12.7498C2.66933 12.752 2.72923 12.7418 2.7852 12.7198C2.84118 12.6978 2.89202 12.6645 2.93455 12.622L3.85275 11.7038C4.62604 12.0779 5.40643 12.2819 6.18025 12.3092C6.24114 12.3114 6.30184 12.3125 6.36236 12.3125C7.2436 12.3148 8.10812 12.072 8.8594 11.6114C11.211 10.1895 12.4649 6.85524 12.2199 2.69133Z" fill="#1BB333"></path>
        </svg>
        <span class="infoPopupTag">ⓘ</span>
        </div>
        
        
        </div>
        </div>
        <div class="si-widget-flex-column right">
        <div class="si-switch-and-price-container">
        <label class="switch">
        <input type="checkbox" class="" id="widget-checkbox">
        </label>
        
        </div>
        </div>
        </div>

        <button class="button">
            Event Info
        </button>
        <button class="button">
            Cart Info
        </button>
        
    <div>
    `;
  console.log("my widge", widget);
  console.log("updated cart element", cartFormElement.innerHTML);
  cartFormElement.append(widget);
}


function configureWidgetCheckbox() {
  const widgetCheckbox = document.querySelector("#widget-checkbox");
  const widgetDisabled = localStorage.getItem("disable-shopify-widget");
  widgetCheckbox.checked = !!!widgetDisabled;
  widgetCheckbox.onchange = function (e) {
    localStorage.setItem("disable-shopify-widget", !e.target.checked);
  };
}

function scrapeProductImages() {
  const images = document.querySelectorAll(".product__media img");
}

function attachEventHandlers() {
  configureWidgetCheckbox();
  scrapeProductImages();
}

setTimeout(() => {
  console.log(" initializing!");

  initWidget();
  attachEventHandlers();
}, 2000);
