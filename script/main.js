/* general variables */
const header = document.getElementById("header");
const container = document.querySelector(".container");

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

/* location choice feature */
/* display location choice */
const displayLocation = (e) => {
  let width = window.innerWidth;

  curtain.classList.toggle("block");
  container.classList.toggle("container-block");

  if (width < 429) {
    mobileChangeLocation.classList.toggle("block");
  } else {
    changeLocation.classList.toggle("block");
  }
};

headerAddress.addEventListener("click", displayLocation);

/* remove location choice */
const removeLocation = (e) => {
  
  let width = window.innerWidth;

  curtain.classList.remove("block");
  container.classList.remove("container-block");

  if (width < 429) {
    mobileChangeLocation.classList.remove("block");
  } else {
    changeLocation.classList.remove("block");
  }
  console.log(e.target);
}

closeLocation.addEventListener("click", removeLocation);
mobileCloseLocation.addEventListener("click", removeLocation);


/* zoop stories feature */
