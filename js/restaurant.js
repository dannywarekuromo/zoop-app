/*=== restaurant global variable ===*/
const foodItemsContainer = document.querySelector(".food-items-content");
const gridItemsContainer = document.querySelector(".food-items-grid-content");
const foodSideBarMenu = document.querySelector(".food-sidebar-menu-list");
const foodBasketItems = document.querySelector(".food-sidebar-view-items");
const foodBasketPrice = document.querySelector(".food-sidebar-payment-total");
const foodBasketTotal = document.querySelector(".food-sidebar-basket-total");
const foodViewBasket = document.querySelector(".food-sidebar-view-basket");
const basketContent = document.querySelector(".basket-content");
const floatingBasket = document.querySelector(".floating-basket");
const basketAddbtn = document.querySelector(".food-add-btn");
const basketAddContainer = document.querySelector(".food-add-btn-container");

/*=== render food items ===*/
const displayFoodItems = () => {
  foodItems.forEach((item) => {
    foodItemsContainer.innerHTML += `
    <div class="food flex-center">
        <div class="food-img container">
            <img src="${item.imgSrc}" alt=${item.name}/>
        </div>
        <div class="food-details flex-column">
        <div class="food-rating-fav flex">
            <div class="food-rating flex text-sm">
            <div class="food-rating-content flex-sm">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                >
                <path
                    d="M6.80068 0.385489C6.96769 -0.128497 7.69484 -0.128496 7.86185 0.385491L9.21006 4.53488C9.28475 4.76474 9.49896 4.92037 9.74065 4.92037H14.1036C14.644 4.92037 14.8687 5.61194 14.4315 5.9296L10.9018 8.49406C10.7063 8.63612 10.6245 8.88794 10.6991 9.1178L12.0474 13.2672C12.2144 13.7812 11.6261 14.2086 11.1889 13.8909L7.65918 11.3265C7.46365 11.1844 7.19888 11.1844 7.00335 11.3265L3.47366 13.8909C3.03644 14.2086 2.44816 13.7812 2.61517 13.2672L3.96339 9.1178C4.03807 8.88794 3.95625 8.63612 3.76072 8.49406L0.231038 5.9296C-0.206185 5.61193 0.0185193 4.92037 0.558957 4.92037H4.92188C5.16357 4.92037 5.37778 4.76474 5.45247 4.53488L6.80068 0.385489Z"
                    fill="#f6f6f6"
                />
                </svg>
                <p class="food-rating-figure">${item.rating}</p>
            </div>
            <div class="food-rating-status flex-sm">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                >
                <rect
                    x="1.66211"
                    y="1"
                    width="18"
                    height="18"
                    rx="3"
                    stroke="#EA4335"
                    stroke-width="2"
                />
                <circle cx="10.6621" cy="10" r="5" fill="#EA4335" />
                </svg>
                <p class="foot-rating-status-p">Bestseller</p>
            </div>
            </div>
            <div class="food-fav-icon btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
            >
                <path
                d="M15.9993 28.8666C15.586 28.8666 15.186 28.8133 14.8527 28.6933C9.75935 26.9466 1.66602 20.7466 1.66602 11.5866C1.66602 6.91997 5.43935 3.1333 10.0793 3.1333C12.3327 3.1333 14.4393 4.0133 15.9993 5.58663C17.5593 4.0133 19.666 3.1333 21.9193 3.1333C26.5594 3.1333 30.3327 6.9333 30.3327 11.5866C30.3327 20.76 22.2393 26.9466 17.146 28.6933C16.8127 28.8133 16.4127 28.8666 15.9993 28.8666ZM10.0793 5.1333C6.54602 5.1333 3.66602 8.02663 3.66602 11.5866C3.66602 20.6933 12.426 25.76 15.506 26.8133C15.746 26.8933 16.266 26.8933 16.506 26.8133C19.5727 25.76 28.346 20.7066 28.346 11.5866C28.346 8.02663 25.466 5.1333 21.9327 5.1333C19.906 5.1333 18.026 6.07997 16.8127 7.71997C16.4393 8.22663 15.586 8.22663 15.2127 7.71997C13.9727 6.06663 12.106 5.1333 10.0793 5.1333Z"
                fill="#5C5F64"
                />
            </svg>
            </div>
        </div>
        <p class="food-name text-normal">${item.name}</p>
        <p class="food-price text-sl-dark">₹${item.price}</p>
        <div class="food-add-btn-container flex-right container">
           <button class="food-add-btn text-normal btn" onclick="addToBasket(${item.id})">Add</button>
        </div>
    </div>
    `;
  });
};

displayFoodItems();

let basket = [];

/*=== add to basket ===*/
function addToBasket(id) {
  // if item already exists in basket
  if (basket.some((item) => item.id === id)) {
    changeUnitNumber("plus", id);
  } else {
    const item = foodItems.find((item) => item.id === id);
    basket.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateBasket();
}

const switchOutBtn = () => {
  basketAddbtn.addEventListener("click", () => {
    basketAddContainer.innerHTML += `
    <div class="incre-decre-btn flex">
      <button class="decrement-btn btn">-</button>
      <p class="basket-item-count text-normal"></p>
      <button class="increment-btn btn">+</button>
    </div>
  `;
  });
};

/*=== update Basket ===*/
function updateBasket() {
  populateBasketContent();
  displayBasketTotal();
}

/*=== calculate and display basket total price and items ===*/
function displayBasketTotal() {
  let totalPrice = 0,
    totalItems = 0;
  const platformFee = 12.43;
  const deliveryFee = 10;

  basket.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  foodBasketTotal.innerHTML = `
  <p class="food-sidebar-basket-total-p text-sl-dark">
  Basket total
  </p>
  <p class="food-sidebar-basket-price text-sl">₹${totalPrice}</p>
  `;
  totalPrice += platformFee + deliveryFee;

  foodBasketPrice.innerHTML = `
  <p class="food-sidebar-total-p text-normal">Total amount</p>
  <p class="food-sidebar-total-price text-normal">₹${totalPrice.toFixed(2)}</p>
  `;

  foodBasketItems.innerHTML = `
  <p class="food-sidebar-items-number text-sl">${totalItems} item</p>
  <span class="span-space-light"></span>
  <p class="food-sidebar-items-price text-sl">₹${totalPrice.toFixed(2)}</p>
  `;
}

foodViewBasket.addEventListener("click", (e) => {
  floatingBasket.classList.toggle("render");
});

/*=== remove floating basket ===*/
const basketBtn = document.querySelector(".basket-header-btn");

basketBtn.addEventListener("click", (e) => {
  floatingBasket.classList.remove("render");
});

/*=== display basket items ===*/
function populateBasketContent() {
  basketContent.innerHTML = ""; //clear basket content
  basket.forEach((item) => {
    basketContent.innerHTML += `
    <div class="basket-item flex-center">
    <div class="food-img container">
        <img src="${item.imgSrc}" alt="${item.name}"/>
    </div>
    <div class="food-details flex-column">
      <div class="food-rating-fav flex">
        <div class="food-rating flex text-sm">
          <div class="food-rating-content flex-sm">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            >
            <path
                d="M6.80068 0.385489C6.96769 -0.128497 7.69484 -0.128496 7.86185 0.385491L9.21006 4.53488C9.28475 4.76474 9.49896 4.92037 9.74065 4.92037H14.1036C14.644 4.92037 14.8687 5.61194 14.4315 5.9296L10.9018 8.49406C10.7063 8.63612 10.6245 8.88794 10.6991 9.1178L12.0474 13.2672C12.2144 13.7812 11.6261 14.2086 11.1889 13.8909L7.65918 11.3265C7.46365 11.1844 7.19888 11.1844 7.00335 11.3265L3.47366 13.8909C3.03644 14.2086 2.44816 13.7812 2.61517 13.2672L3.96339 9.1178C4.03807 8.88794 3.95625 8.63612 3.76072 8.49406L0.231038 5.9296C-0.206185 5.61193 0.0185193 4.92037 0.558957 4.92037H4.92188C5.16357 4.92037 5.37778 4.76474 5.45247 4.53488L6.80068 0.385489Z"
                fill="#f6f6f6"
            />
            </svg>
            <p class="food-rating-figure">4.2</p>
          </div>
          <div class="food-rating-status flex-sm">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            >
            <rect
                x="1.66211"
                y="1"
                width="18"
                height="18"
                rx="3"
                stroke="#EA4335"
                stroke-width="2"
            />
            <circle cx="10.6621" cy="10" r="5" fill="#EA4335" />
            </svg>
            <p class="foot-rating-status-p">Bestseller</p>
          </div>
        </div>
    </div>
    <p class="food-name text-normal">${item.name}</p>
    <p class="food-price text-sl-dark">₹${item.price}</p>
    <div class="basket-btn-container flex-right container">
       <div class="incre-decre-btn flex">
          <button class="decrement-btn btn" onclick="changeUnitNumber('minus', ${item.id})">-</button>
          <p class="basket-item-count text-normal">${item.numberOfUnits}</p>
          <button class="increment-btn btn" onclick="changeUnitNumber('plus', ${item.id})">+</button>
       </div>
    </div>
  </div>
    `;
  });
}

/*=== change number of units ===*/
function changeUnitNumber(action, id) {
  basket = basket.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateBasket();
}

const renderGridItems = () => {
  foodItems.forEach((item) => {
    gridItemsContainer.innerHTML += `
        <a href="../pages/category.html" class="food-grid-item btn flex-center">
            <p class="food-grid-item-p text-normal">${item.name}</p>
        </a>
        `;
  });
};

renderGridItems();

const displayFoodMenu = () => {
  foodItems.forEach((item) => {
    foodSideBarMenu.innerHTML += `
    <div class="food-sidebar-menu-item flex-between">
      <p class="food-sidebar-food text-normal">
        ${item.name}
      </p>
      <p class="food-sidebar-food-left text-normal">${item.instock}</p>
    </div>
    `;
  });
};

displayFoodMenu();
