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
  const curtain = document.querySelector(".curtain");
  const priceDropdown = document.querySelector(".restaurant-sort-dropdown-container");

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

  const displayPriceDropdown = () => {
    priceDropdown.classList.toggle("active");
  }

  priceDropdown.addEventListener("click", displayPriceDropdown);

  // storiesContainer.addEventListener("mouseenter", (e) => {
  //   console.log(storiesContent.offsetWidth);
  // })

  addressTitle.addEventListener("click", displayAddressList);
  addressCloseBtn.addEventListener("click", removeAddressList);
  mobileAddressCloseBtn.addEventListener("click", removeAddressList);
  addressListLinks.forEach((addressLink) => {
    addressLink.addEventListener("click", (e) => {
      console.log(e);
    });
  });
});
