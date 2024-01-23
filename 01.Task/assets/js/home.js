let cards = document.querySelector(".cards");

const BASE_URL = "http://localhost:8080/products";

async function getDataAll() {
  let res = await axios(`${BASE_URL}`);
  console.log(res.data);
  drawCard(res.dat);
}
getDataAll();

async function drawCard(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    const cardsElement = document.createElement("div");
    cardsElement.className = "card";
    cards.innerHTML += `
      <div class="card">
              <h1>${element.text}</h1>
              <p>${element.title}</p>
            </div>
    `;
    cards.append = cardsElement;
  });
}
