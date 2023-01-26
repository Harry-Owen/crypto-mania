fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
.then(response => response.json())
.then(data => {
data.forEach(crypto => {
let cryptoContainer = document.getElementById("crypto-container");

  // Create a div for each crypto
  let cryptoDiv = document.createElement("div");
  cryptoDiv.id = crypto.id;
  cryptoDiv.classList.add("crypto-div");
  cryptoContainer.appendChild(cryptoDiv);

  // Create a title for each crypto
  let cryptoTitle = document.createElement("h3");
  cryptoTitle.innerHTML = crypto.name;
  cryptoDiv.appendChild(cryptoTitle);

  // Create a canvas for the graph
  let cryptoCanvas = document.createElement("canvas");
  cryptoCanvas.id = crypto.id + "-chart";
  cryptoDiv.appendChild(cryptoCanvas);

  // Get the historical data for the crypto
  fetch(`https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart?vs_currency=usd&days=30`)
    .then(response => response.json())
    .then(data => {
      // Extract the labels and data from the API response
      let labels = data.prices.map(point => point[0]);
      let dataPoints = data.prices.map(point => point[1]);

      // Determine the trend of the crypto
      let trend = dataPoints[dataPoints.length - 1] > dataPoints[0] ? "up" : "down";

      // Create the chart
      let chart = new Chart(cryptoCanvas, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: crypto.name,
            data: dataPoints,
            backgroundColor: trend === "up" ? "rgba(0, 255, 0, 0.3)" : "rgba(255, 0, 0, 0.3)",
            borderColor: trend === "up" ? "green" : "red"
          }]
        },
        options: {
          scales: {
              x: {
                  type: 'time',
                  time: {
                      unit: 'day'
                  }
              },
              y: {
                beginAtZero: true
              }
          }
      }      
      });
    });
});
});



