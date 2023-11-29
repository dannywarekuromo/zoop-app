window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  header.classList.toggle("active", window.scrollY > 95);
}) 


window.addEventListener("load", () => {
  /*=== global variables ===*/
  const addressTitle = document.querySelector(".address-title");
  const addressCloseBtn = document.querySelector(".address-list-close");
  const mobileAddressCloseBtn = document.querySelector(
    ".mobile-address-list-close"
  );
  const addressListLinks = document.querySelectorAll(".address-list-link");
  const mobileAddressListLinks = document.querySelectorAll(".mobile-address-list-link");
  const curtain = document.querySelector(".curtain");
  const priceDropdown = document.querySelector(".restaurant-sort-dropdown-container");

  /*=== display search history (desktop view)===*/
  const appSearch = document.querySelector(".app-search")
  const searchHistory = document.querySelector(".search-history")
  const displaySearchHistory = (e) => {
    appSearch.classList.add("active");
    searchHistory.classList.add("active");
    mobileNavLink.classList.remove("active");
    mobileNavSearch.classList.add("active");
  }

  const removeSearchHistory = (e) => {
    appSearch.classList.remove("active");
    searchHistory.classList.remove("active"); 
    mobileNavSearch.classList.remove("active");
    mobileNavHome.classList.add("active");
  }

  appSearch.addEventListener("click", displaySearchHistory);
  appSearch.addEventListener("submit", removeSearchHistory);


  /*=== mobile search history  ===*/
  const mobileAppSearch = document.querySelector(".mobile-app-search");
  const mobileSearch = document.querySelector(".mobile-search");
  const mobileNavSearch = document.querySelector(".mobile-nav-search");
  const mobileNavHome = document.querySelector(".mobile-nav-home");
  const mobileNavLink = document.querySelector(".mobile-nav-link");


  /*=== display search query ===*/
  const displaySearchQuery =(e) => {
    mobileSearch.classList.add("active");
    mobileNavLink.classList.remove("active");
    mobileNavSearch.classList.add("active");
  }

  mobileAppSearch.addEventListener("click", displaySearchQuery );
  mobileNavSearch.addEventListener("click", window.innerWidth > 800 ? displaySearchHistory : displaySearchQuery);

   /*=== remove search query ===*/
   const removeSearchQuery =(e) => {
    mobileSearch.classList.remove("active");
    mobileNavSearch.classList.remove("active");
    mobileNavHome.classList.add("active");
  }

  mobileNavHome.addEventListener("click", window.innerWidth > 800 ? removeSearchHistory : removeSearchQuery);



  /*=== display address list ===*/
  const displayAddressList = (e) => {
    const addressList = document.querySelector(".address-list");
    const mobileAddressList = document.querySelector(".mobile-address-list");
    let width = window.innerWidth;

    curtain.classList.add("block");

    if (width > 800) {
      addressList.classList.add("float");
    } else {
      mobileAddressList.classList.add("float");
    }
  };

  /*=== address list items ===*/

  for (let i = 0; i < addressListLinks.length; i++) {
    const addressName = document.querySelector(".address-name");
    const addressParagraph = document.querySelector(".address-p");

    addressListLinks[i].addEventListener("click", (e) => {
      const addressListTitle = document.querySelectorAll(".address-list-title");
      const addressLocation = document.querySelectorAll(".address-list-location");

      const addressTitleText = addressListTitle[i].textContent;
      const addressLocationText = addressLocation[i].textContent;

      addressName.textContent = addressTitleText;
      addressParagraph.textContent = addressLocationText;

      removeAddressList();

    })
  }

  /*=== mobile address list items ===*/
  for (let i = 0; i < mobileAddressListLinks.length; i++) {
    const addressName = document.querySelector(".address-name");
    const addressParagraph = document.querySelector(".address-p");

    mobileAddressListLinks[i].addEventListener("click", (e) => {
      const mobileAddressListTitle = document.querySelectorAll(".mobile-address-list-title");
      const mobileAddressLocation = document.querySelectorAll(".mobile-address-list-location");

      const addressTitleText = mobileAddressListTitle[i].textContent;
      const addressLocationText = mobileAddressLocation[i].textContent;

      addressName.textContent = addressTitleText;
      addressParagraph.textContent = addressLocationText;
      // mobileAddressListLinks[i].classList.remove("active")
      // mobileAddressListLinks[i].classList.add("active")
      removeAddressList();

    })
  }

  /*=== remove address list ===*/
  const removeAddressList = (e) => {
    const addressList = document.querySelector(".address-list");
    const mobileAddressList = document.querySelector(".mobile-address-list");
    let width = window.innerWidth;

    curtain.classList.remove("block");

    if (width > 800) {
      addressList.classList.remove("float");
    } else {
      mobileAddressList.classList.remove("float");
    }
  };

  /*=== display dropdown menu ===*/
  const displayPriceDropdown = () => {
    priceDropdown.classList.toggle("active");
  }

  priceDropdown.addEventListener("click", displayPriceDropdown);

  addressTitle.addEventListener("click", displayAddressList);
  addressCloseBtn.addEventListener("click", removeAddressList);
  mobileAddressCloseBtn.addEventListener("click", removeAddressList);
  
});
