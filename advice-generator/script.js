const advice_id = document.querySelector(".id");
const advice = document.querySelector(".advice");
const dice_btn = document.querySelector(".dice-btn");

const handleClick = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((jsonData) => {
      advice_id.innerText = jsonData["slip"]["id"];
      advice.innerText = jsonData["slip"]["advice"];
    });
};

dice_btn.addEventListener("click", handleClick);
