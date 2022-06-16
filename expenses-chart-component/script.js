const data = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => console.log(error));

let chartContainer = document.querySelector(".chart-container ");
console.log(chartContainer);

// console.log(data);

data.then((data) => {
  data.forEach((item) => {
    let chart = document.createElement("div");
    chart.classList.add("chart");
    const height = item.amount * 2;
    let value = "";
    if (item.day == "wed") {
      value = `<div class="chart-graph active" style="--height:${height}px"></div>`;
    } else {
      value = `<div class="chart-graph" style="--height:${height}px"></div>`;
    }
    chart.innerHTML = `
    <div class ="chart-value">${item.amount}</div>  
    <div class="chart-wrapper">
      
            ${value}
              
      </div>
      
      
      <div class="chart-title">${item.day}</div>
      `;
    chartContainer.appendChild(chart);
  });
});
