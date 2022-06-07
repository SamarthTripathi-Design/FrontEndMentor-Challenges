const submit_btn = document.querySelector(".btn-submit");
const ratings_btns = document.querySelectorAll(".btn-num");
const score = document.querySelector(".score");
const card_rating = document.querySelector(".card-rating");
const card_thankyou = document.querySelector(".card-thankyou");
let rating;

const handleSubmit = () => {
  if (rating) {
    card_rating.classList.add("hide");
    card_thankyou.classList.remove("hide");
    score.textContent = rating;
  } else {
    console.log("nothing");
  }
};

const handleRatingsClick = (e) => {
  ratings_btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (e.target.classList.contains("btn-num")) {
    e.target.classList.add("active");
  } else {
    e.target.parentElement.classList.add("active");
  }

  rating = e.target.textContent;
  console.log(rating);
};

submit_btn.addEventListener("click", handleSubmit);

ratings_btns.forEach((btn) => {
  btn.addEventListener("click", handleRatingsClick);
});
