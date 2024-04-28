console.log("Here is the content script running");

function initWidget() {
  const cartFormElement = document.querySelector(".cart__ctas");
  if (!cartFormElement) return;
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
        <div class="si-widget-container>
          <div class="event-button" title="Event Info">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" style="width:60px;" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
            </div>

            <span>Event Info <span>
          </div>

          <div class="cart-button" title="Cart Info">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" style="width:60px;" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </div>
            <span>Cart Info<span>
          </div>
        </div>
        </div>
        
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
  const imageUrls = [];
  for (let i = 0; i < images.length; i++) {
    imageUrls.push(images[i].src);
  }

  const path = location.pathname.split("/");
  const productName = path[path.length - 1];
  const data = {
    name: productName,
    image: imageUrls.join(","),
  };

  fetch("http://localhost:8080/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
    })
    .catch((error) => {
      // Handle any errors
    });
}

// Cart info Event handlers and functions

function getCartItems() {
  const items = [];
  document.querySelectorAll(".cart-item__details").forEach((item) => {
    const name = item.querySelector(".cart-item__name").textContent.trim();
    const price = item.querySelector(".product-option").textContent.trim();
    items.push({ name, price });
  });
  return items;
}

function getCartTotal() {
  const totalContainer = document.querySelector(".totals__subtotal-value");
  return totalContainer ? totalContainer.textContent.trim() : "";
}

function createCartInfoModal() {
  // Create container for the modal
  const modalElement = document.createElement("div");
  const modalContainer = document.createElement("div");

  modalContainer.id = "cartInfoModal";
  modalContainer.style.cssText =
    "display:block; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; z-index:1000; padding:20px; border-radius:5px;";

  // Adding inner HTML content
  modalContainer.innerHTML = `
  <h2>Cart Information</h2>
  
  <div id="cartItemsContainer"></div>
  <div id="totalPriceContainer"></div>
  <button id="closeButton" class="button" style="margin-top:20px;" >Close</button>
  `;

  const overlayElement = document.createElement("div");
  overlayElement.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;" > </div>`;
  overlayElement.innerHTML = " ";

  modalElement.append(overlayElement);
  modalElement.append(modalContainer);

  document.body.appendChild(modalElement);

  // Hook up the close event to remove the modal
  document.getElementById("closeButton").addEventListener("click", function () {
    modalContainer.remove();
    overlayElement.remove();
  });
}

function createEventInfoModal() {
  // Create container for the modal
  const modalElement = document.createElement("div");
  const modalContainer = document.createElement("div");

  modalContainer.id = "cartInfoModal";
  modalContainer.style.cssText =
    "display:block; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; z-index:1000; padding:20px; border-radius:5px;";

  // Adding inner HTML content
  modalContainer.innerHTML = `
  <h2>Cart Information</h2>
  
  <div id="cartItemsContainer"></div>
  <div id="totalPriceContainer"></div>
  <button id="closeButton" class="button" style="margin-top:20px;" >Close</button>
  `;

  const overlayElement = document.createElement("div");
  overlayElement.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;" > </div>`;
  overlayElement.innerHTML = " ";

  modalElement.append(overlayElement);
  modalElement.append(modalContainer);

  document.body.appendChild(modalElement);

  // Hook up the close event to remove the modal
  document.getElementById("closeButton").addEventListener("click", function () {
    modalContainer.remove();
    overlayElement.remove();
  });
}

function displayCartInfo() {
  createCartInfoModal(); // Ensure modal creation is prior to data insertion.

  const modal = document.getElementById("cartInfoModal");
  const itemsContainer = document.getElementById("cartItemsContainer");

  const items = getCartItems();

  // const items = getCartItems();s
  // itemsContainer.innerHTML = items
  //   .map((item) => `<p>${item.name}: ${item.price}</p>`)
  //   .join("");
  // totalPriceContainer.innerHTML = `<strong>Total: ${getCartTotal()}</strong>`;

  itemsContainer.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      ${items
        .map((item) => `<tr><td>${item.name}</td><td>${item.price}</td></tr>`)
        .join("")}
      <tr>
        <td>Total</td><td>${getCartTotal()}</td>
      </tr>
    </tbody>
  </table>
  `;

  modal.style.display = "block";
}

function displayEventInfo() {
  createEventInfoModal(); // Ensure modal creation is prior to data insertion.

  const modal = document.getElementById("cartInfoModal");
  const itemsContainer = document.getElementById("cartItemsContainer");

  const items = getCartItems();

  // const items = getCartItems();s
  // itemsContainer.innerHTML = items
  //   .map((item) => `<p>${item.name}: ${item.price}</p>`)
  //   .join("");
  // totalPriceContainer.innerHTML = `<strong>Total: ${getCartTotal()}</strong>`;

  itemsContainer.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      ${items
        .map((item) => `<tr><td>${item.name}</td><td>${item.price}</td></tr>`)
        .join("")}
      <tr>
        <td>Total</td><td>${getCartTotal()}</td>
      </tr>
    </tbody>
  </table>
  `;

  modal.style.display = "block";

}
// All Event Handlers
function attachEventHandlers() {
  configureWidgetCheckbox();
  document
    .querySelector(".cart-button")
    .addEventListener("click", displayCartInfo);

    
  document
  .querySelector(".event-button")
  .addEventListener("click", displayEventInfo);
}

setTimeout(async () => {
  console.log(" initializing!");
  if (location.pathname.indexOf("cart") != -1) {
    await initWidget();
    attachEventHandlers();
  } else {
    scrapeProductImages();
  }
}, 5000);
