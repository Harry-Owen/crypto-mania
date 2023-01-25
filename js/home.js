// c0caa6210dmsh06ccd7458aa84f4p1f6e60jsn7fba8e1d64d3

fetch("https://12data.co/v1/stock/prices?apikey=c0caa6210dmsh06ccd7458aa84f4p1f6e60jsn7fba8e1d64d3")
  .then(response => response.json())
  .then(data => {
    let stockPrices = data.stockPrices;
    let list = document.getElementById("stock-list");
    stockPrices.forEach(stock => {
      let li = document.createElement("li");
      li.innerHTML = `${stock.name} : ${stock.price} ${stock.fiat}`;
      list.appendChild(li);
    });
    
  });
