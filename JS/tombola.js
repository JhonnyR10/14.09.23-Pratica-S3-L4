const createNumbers = function (n) {
  const tombolaDiv = document.getElementById("tombolaCell");
  for (let i = 0; i < n; i++) {
    const numberCellDiv = document.createElement("div");
    numberCellDiv.classList.add("numberTombola");
    const cellValue = document.createElement("h2");
    cellValue.innerText = i + 1;
    numberCellDiv.appendChild(cellValue);
    tombolaDiv.appendChild(numberCellDiv);
  }
};
createNumbers(76);

const estrazione = function (e) {
  const h2Tabellone = document.querySelectorAll("h2");
  const numeriTabellone = [];
  const randomNumber = Math.ceil(Math.random() * 76);
  for (let i = 0; i < h2Tabellone.length; i++) {
    console.log(randomNumber);
    if (
      parseInt(h2Tabellone[i].innerText) === randomNumber &&
      !h2Tabellone[i].querySelector(".selected")
    ) {
      h2Tabellone[i].parentElement.style.backgroundColor = "green";
      h2Tabellone[i].classList.add("selected");
      break;
    }
  }
};

const numCartForm = document.getElementById("form");
numCartForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const numCartInputField = document.getElementById("numCartelle");
  const numCart = numCartInputField.value;
  const divProprie = document.getElementById("proprieCart");
  for (let i = 0; i < numCart; i++) {
    const newCart = document.createElement("div");
    //newCart.classList.add("numberTombola");
    //const numberCart = document.createElement("h2");
    let cont = 0;
    while (cont < 26) {
      const numberCart = document.createElement("h2");
      numberCart.innerText = Math.ceil(Math.random() * 76);
      cont++;
    }
    newCart.appendChild(numberCart);
    divProprie.appendChild(newCart);
  }
});
