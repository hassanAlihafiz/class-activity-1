function totalCost(basket, prices) {
  let total = 0;
  for (const product of Object.keys(basket)) {
    total += basket[product] * prices[product];
  }
  return total;
}

function showTotal() {
      const basket = { apples: 3, bananas: 2 };
      const prices = { apples: 5, bananas: 2 };
      const total = totalCost(basket, prices);
      document.getElementById("result6").textContent = "Total: " + total;
}
