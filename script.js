const buttonData = [
  { id: 0, counter: 0, image: "pinchos.jpeg" },
  { id: 1, counter: 0, image: "costillas.jpg" },
  { id: 2, counter: 0, image: "marimonti.jpeg" },
  { id: 3, counter: 0, image: "verduras.jpeg" },
  { id: 4, counter: 0, image: "qpojo.png" },
  { id: 5, counter: 0, image: "trianglo.png" },
  { id: 6, counter: 0, image: "portabelo.jpg" },
  { id: 7, counter: 0, image: "albundigas.jpeg" },
  { id: 8, counter: 0, image: "panconajo.jpg" },
  { id: 9, counter: 0, image: "tortilla.jpeg" },
  { id: 10, counter: 0, image: "chevresallad.jpeg" },
  { id: 11, counter: 0, image: "chevrebrod.jpg" },
  { id: 12, counter: 0, image: "halluomi.png" },
  { id: 13, counter: 0, image: "manchego.jpeg" },
  { id: 14, counter: 0, image: "hamburgare.jpg" },
  { id: 15, counter: 0, image: "tunfisk.jpg" },
  { id: 16, counter: 0, image: "sallskab.png" }
];

const grid = document.getElementById('buttonGrid');

function renderButtons() {
  grid.innerHTML = "";

  buttonData.forEach((btn, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "food-button";
    wrapper.style.setProperty('--bg-image', `url(images/${btn.image})`);
    wrapper.onclick = () => {
      btn.counter++;
      renderButtons();
    };

    const counter = document.createElement("div");
    counter.className = "counter";
    counter.textContent = btn.counter;

    wrapper.appendChild(counter);
    grid.appendChild(wrapper);
  });

  // Add reset button at the end
  const resetBtn = document.createElement("button");
  resetBtn.className = "reset-button";
  resetBtn.onclick = () => {
    buttonData.forEach(btn => btn.counter = 0);
    renderButtons();
  };

  const resetImg = document.createElement("img");
  resetImg.src = "images/reset.png";
  resetImg.style.width = "100%";
  resetImg.style.borderRadius = "10px";

  resetBtn.appendChild(resetImg);
  grid.appendChild(resetBtn);
}

renderButtons();
