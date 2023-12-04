window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  header.classList.toggle("active", window.scrollY > 95);
});

  /*=== global variables ===*/
  const addressTitle = document.querySelector(".address-title");
  const addressCloseBtn = document.querySelector(".address-list-close");
  const mobileAddressCloseBtn = document.querySelector(
    ".mobile-address-list-close"
  );
  const addressListLinks = document.querySelectorAll(".address-list-link");
  const mobileAddressListLinks = document.querySelectorAll(
    ".mobile-address-list-link"
  );
  const curtain = document.querySelector(".curtain");
  const priceDropdown = document.querySelector(
    ".restaurant-sort-dropdown-container"
  );

  /*=== display search history (desktop view)===*/
  const appSearch = document.querySelector(".app-search");
  const searchHistory = document.querySelector(".search-history");
  const displaySearchHistory = () => {
    appSearch.classList.add("active");
    searchHistory.classList.add("active");
    mobileNavLink.classList.remove("active");
    mobileNavSearch.classList.add("active");
  };

  const removeSearchHistory = () => {
    appSearch.classList.remove("active");
    searchHistory.classList.remove("active");
    mobileNavSearch.classList.remove("active");
    mobileNavHome.classList.add("active");
  };

  appSearch.addEventListener("click", displaySearchHistory);
  appSearch.addEventListener("submit", removeSearchHistory);

  /*=== mobile search history  ===*/
  const mobileAppSearch = document.querySelector(".mobile-app-search");
  const mobileSearch = document.querySelector(".mobile-search");
  const mobileNavSearch = document.querySelector(".mobile-nav-search");
  const mobileNavHome = document.querySelector(".mobile-nav-home");
  const mobileNavLink = document.querySelector(".mobile-nav-link");

  /*=== display search query ===*/
  const displaySearchQuery = () => {
    mobileSearch.classList.add("active");
    mobileNavLink.classList.remove("active");
    mobileNavSearch.classList.add("active");
  };

  mobileAppSearch.addEventListener("click", displaySearchQuery);
  mobileNavSearch.addEventListener(
    "click",
    window.innerWidth > 800 ? displaySearchHistory : displaySearchQuery
  );

  /*=== remove search query ===*/
  const removeSearchQuery = (e) => {
    mobileSearch.classList.remove("active");
    mobileNavSearch.classList.remove("active");
    mobileNavHome.classList.add("active");
  };

  mobileNavHome.addEventListener(
    "click",
    window.innerWidth > 800 ? removeSearchHistory : removeSearchQuery
  );

  /*=== display address list (desktop view) ===*/
  const displayAddressList = (e) => {
    const addressList = document.querySelector(".address-list");

    curtain.classList.add("block");
    addressList.classList.add("float");
  };

  /*=== display address list (mobile view) ===*/
  const displayMobileAddressList = (e) => {
    const mobileAddressList = document.querySelector(".mobile-address-list");

    curtain.classList.add("block");
    mobileAddressList.classList.add("float");
  };

  /*=== remove address list (desktop view) ===*/
  const removeAddressList = (e) => {
    const addressList = document.querySelector(".address-list");

    curtain.classList.remove("block");
    addressList.classList.remove("float");
  };

  /*=== remove address list (mobile view) ===*/
  const removeMobileAddressList = (e) => {
    const mobileAddressList = document.querySelector(".mobile-address-list");

    curtain.classList.remove("block");
    mobileAddressList.classList.remove("float");
  };

  addressTitle.addEventListener("click", window.innerWidth > 800 ? displayAddressList : displayMobileAddressList);
  addressCloseBtn.addEventListener("click", removeAddressList);
  mobileAddressCloseBtn.addEventListener("click", removeMobileAddressList);

  /*=== address list items ===*/

  for (let i = 0; i < addressListLinks.length; i++) {
    const addressName = document.querySelector(".address-name");
    const addressParagraph = document.querySelector(".address-p");

    addressListLinks[i].addEventListener("click", (e) => {
      const addressListTitle = document.querySelectorAll(".address-list-title");
      const addressLocation = document.querySelectorAll(
        ".address-list-location"
      );

      const addressTitleText = addressListTitle[i].textContent;
      const addressLocationText = addressLocation[i].textContent;

      addressName.textContent = addressTitleText;
      addressParagraph.textContent = addressLocationText;

      removeAddressList();
    });
  }

  /*=== mobile address list items ===*/
  for (let i = 0; i < mobileAddressListLinks.length; i++) {
    const addressName = document.querySelector(".address-name");
    const addressParagraph = document.querySelector(".address-p");

    mobileAddressListLinks[i].addEventListener("click", (e) => {
      const mobileAddressListTitle = document.querySelectorAll(
        ".mobile-address-list-title"
      );
      const mobileAddressLocation = document.querySelectorAll(
        ".mobile-address-list-location"
      );

      const addressTitleText = mobileAddressListTitle[i].textContent;
      const addressLocationText = mobileAddressLocation[i].textContent;

      addressName.textContent = addressTitleText;
      addressParagraph.textContent = addressLocationText;
  
      removeMobileAddressList();
    });
  }

  /*=== display dropdown menu ===*/
  const displayPriceDropdown = () => {
    priceDropdown.classList.toggle("active");
  };

  priceDropdown.addEventListener("click", displayPriceDropdown);

/*=== favorite scroll functions ===*/
const leftFavBtn = document.querySelector(".fav-left-btn");
const rightFavBtn = document.querySelector(".fav-right-btn");
const favorites = document.querySelector(".favorites");
const favoritesContent = document.querySelector(".favorites-content");
const favoriteScrollBtn = document.querySelector(".favorite-scroll-btn");

if(favorites.offsetWidth < favoritesContent.offsetWidth) {
  favoriteScrollBtn.classList.add("disable");
} else {
  favoriteScrollBtn.classList.remove("disable");
}

const scrollToRight = () => {
  favoritesContent.scrollLeft += 400;
}
const scrollToLeft = (e) => {
  favoritesContent.scrollLeft -= 400;
}

rightFavBtn.addEventListener("click", scrollToRight);
leftFavBtn.addEventListener("click", scrollToLeft);

/*=== recent scroll functions ===*/
const leftRecentBtn = document.querySelector(".recent-left-btn");
const rightRecentBtn = document.querySelector(".recent-right-btn");
const recents = document.querySelector(".recents");
const recentContent = document.querySelector(".recent-content");
const recentScrollBtn = document.querySelector(".recent-scroll-btn");

if(recents.offsetWidth < recentContent.offsetWidth) {
  recentScrollBtn.classList.add("disable");
} else {
  recentScrollBtn.classList.remove("disable");
}

const recentToRight = () => {
  recentContent.scrollLeft += 400;
}
const recentToLeft = (e) => {
  recentContent.scrollLeft -= 400;
}

rightRecentBtn.addEventListener("click", recentToRight);
leftRecentBtn.addEventListener("click", recentToLeft);


/*=== display stories ===*/
const stories = document.querySelectorAll(".story");

stories.forEach((story) => {
  story.addEventListener("click", () => {

  })
})
const storySlider = () => {
  
}


