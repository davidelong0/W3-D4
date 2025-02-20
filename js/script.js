document.addEventListener("DOMContentLoaded", () => {
  const tabels = document.getElementById("tabels");
  const form = document.getElementById("newMeetingForm");

  const button = document.createElement("button");
  button.innerText = "Estrai Numero";
  button.type = "button";
  form.appendChild(button);

  const numbers = Array.from({ length: 76 }, (_, i) => i + 1);
  const extractedNumbers = new Set();

  numbers.forEach((num) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = num;
    cell.id = `num-${num}`;
    tabels.appendChild(cell);
  });

  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (extractedNumbers.size === 76) {
      alert("Tutti i numeri sono stati estratti!");
      return;
    }

    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 76) + 1;
    } while (extractedNumbers.has(randomNumber));

    extractedNumbers.add(randomNumber);
    document.getElementById(`num-${randomNumber}`).classList.add("extracted");
  });
});
