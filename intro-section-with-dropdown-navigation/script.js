let feature = document.querySelector(".feature");
let featurelist = document.querySelector(".feature-list");
let company = document.querySelector(".company");
let companylist = document.querySelector(".company-list");

const a = document.querySelector("a");
a.onclick = (e) => {
  e.preventDefault();
};

feature.onclick = () => {
  if (featurelist.classList.contains("hide")) {
    featurelist.classList.remove("hide");
  } else {
    featurelist.classList.add("hide");
  }
};

company.onclick = () => {
  if (companylist.classList.contains("hide")) {
    companylist.classList.remove("hide");
  } else {
    companylist.classList.add("hide");
  }
};
