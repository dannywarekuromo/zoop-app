window.addEventListener("load", () => {
  /*=== global variables ===*/
  const addressTitle = document.querySelector(".address-title");
  const addressCloseBtn = document.querySelector(".address-list-close");
  const mobileAddressCloseBtn = document.querySelector(
    ".mobile-address-list-close"
  );
  const storiesContainer = document.querySelector(".stories-container");
  const storiesContent = document.querySelector(".stories-content");
  const addressListLinks = document.querySelectorAll(".address-list-link");
  const curtain = document.querySelector(".curtain");

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

  // storiesContainer.addEventListener("mouseenter", (e) => {
  //   console.log(storiesContent.offsetWidth);
  // })

  addressTitle.addEventListener("click", displayAddressList);
  addressCloseBtn.addEventListener("click", removeAddressList);
  mobileAddressCloseBtn.addEventListener("click", removeAddressList);
  addressListLinks.forEach(
    (addressLink) => {
        addressLink.addEventListener("click", (e) => {
            console.log(e);
        })
    }
  )
});
