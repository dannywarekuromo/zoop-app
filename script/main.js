/* general variables */
const header = document.getElementById("header");

// location variables
const headerAddress = document.querySelector(".header-address");
const changeLocation = document.querySelector(".change-location");
const mobileChangeLocation = document.querySelector(".mobile-change-location");
const curtain = document.querySelector(".curtain");
const closeLocation = document.querySelector(".close-location");
const mobileCloseLocation = document.querySelector(".mobile-close-location");

/* sticky navigation bar */
const stickynav = () => {
    const headerHeight = header.offsetHeight;
  
    if (window.pageYOffset > headerHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

window.addEventListener("scroll", stickynav);

/* display location options */
const displayLocation = (e) => {
  let width = window.innerWidth;

  curtain.classList.toggle("block");

  if (width < 429) {
    mobileChangeLocation.classList.toggle("block");
  } else {
    changeLocation.classList.toggle("block");
  }
};

headerAddress.addEventListener("click", displayLocation);

/* remove location options */
const removeLocation = (e) => {
  let width = window.innerWidth;

  curtain.classList.remove("block");
  if (width < 429) {
    mobileChangeLocation.classList.remove("block");
  } else {
    changeLocation.classList.remove("block");
  }
  console.log(e.target);
};

closeLocation.addEventListener("click", removeLocation);
mobileCloseLocation.addEventListener("click", removeLocation);
