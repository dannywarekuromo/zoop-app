window.addEventListener("load", () => {
  /*=== Display food menu ===*/
  const foodMenuBtn = document.querySelector(".food-sidebar-menu-btn");
  const foodMenuContent = document.querySelector(".food-sidebar-menu-content");
  const foodMenuList = document.querySelector(".food-sidebar-menu-list");

  const displayFoodMenu = (e) => {
    foodMenuContent.classList.toggle("active");
    foodMenuList.classList.toggle("active");
  };

  foodMenuBtn.addEventListener("click", displayFoodMenu);

  /*=== display service options ===*/
  const deliveryDropDownBtn = document.querySelector(
    ".food-sidebar-delivery-dropdown"
  );
  const deliveryDropDownList = document.querySelector(
    ".food-sidebar-delivery-list"
  );

  const displayServiceOptions = (e) => {
    deliveryDropDownList.classList.toggle("active");
  };

  deliveryDropDownBtn.addEventListener("click", displayServiceOptions);

  /*=== remove service options ===*/
  const removeServiceOptions = (e) => {
    if (deliveryDropDownList.classList.contains("active")) {
      deliveryDropDownList.classList.remove("active");
    }
  };

  /*=== services option items ===*/
  const deliveryDropDownItems = document.querySelectorAll(
    ".food-sidebar-delivery-item"
  );

  for (let i = 0; i < deliveryDropDownItems.length; i++) {
    deliveryDropDownItems[i].addEventListener("click", () => {
      const deliveryServiceText = document.querySelector(
        ".food-sidebar-delivery-text"
      );
      const deliveryServiceOptions = document.querySelectorAll(
        ".food-sidebar-delivery-option"
      );

      const deliveryServiceOptionText = deliveryServiceOptions[i].textContent;

      deliveryServiceText.textContent = deliveryServiceOptionText;

      removeServiceOptions();
    });
  }

  /*=== Display Food Items ===*/
  const displayListBtn = document.querySelector(".food-items-display-list");
  const displayGridBtn = document.querySelector(".food-items-display-grid");
  const displayListContent = document.querySelector(".food-items-content");
  const displayGridContent = document.querySelector(".food-items-grid-content");
  const foodCategoryList = document.querySelector(".food-category-list");
  const displayList = (e) => {
    displayListContent.classList.remove("active");
    displayGridContent.classList.remove("active");
    displayListBtn.classList.remove("active");
    displayGridBtn.classList.remove("active");

    displayListContent.classList.add("active");
    displayListBtn.classList.add("active");
    foodCategoryList.style.display = "flex";
  };

  const displayGrid = (e) => {
    displayGridContent.classList.remove("active");
    displayListContent.classList.remove("active");
    displayGridBtn.classList.remove("active");
    displayListBtn.classList.remove("active");

    displayGridContent.classList.add("active");
    displayGridBtn.classList.add("active");
    foodCategoryList.style.display = "none";
  };

  displayListBtn.addEventListener("click", displayList);
  displayGridBtn.addEventListener("click", displayGrid);
});
