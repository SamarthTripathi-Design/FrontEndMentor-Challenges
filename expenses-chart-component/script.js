const data = fetch("./Data.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

let chartContainer = document.querySelector(".chart-container ");
console.log(chartContainer);

// data.forEach((item) => {
//   let chart = document.createElement("div");
//   chart.classList.add("chart");
//   chart.innerHTML = `${item.day}`;
// });

data.map((item) => {
  let chart = document.createElement("div");
  chart.classList.add("chart");
  chart.innerHTML = `${item.day}`;
});
