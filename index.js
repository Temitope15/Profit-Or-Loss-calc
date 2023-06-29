const sellingPrice = document.getElementById("sp");
const costPrice = document.getElementById("cp");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
const calculate = () => {
  const sp = parseInt(sellingPrice.value);
  const cp = parseInt(costPrice.value);
  reset.style.display = "block";
  btn.style.display = "none";
  if (sp > cp) {
    const profit = 100 * (sp / cp - 1);
    result.innerText = `Congratulations! You have made a profit of #${
      sp - cp
    } and that's a ${Math.floor(profit)}% profit!`;
  } else if (cp > sp) {
    const loss = 100 * (1 - sp / cp);
    result.innerText = `Oops! You have made a loss of #${
      cp - sp
    } and that's a ${Math.floor(loss)}% loss`;
  } else {
    result.innerText = `No profit or loss made!`;
  }
};
