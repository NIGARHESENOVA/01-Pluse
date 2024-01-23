let allInputs = document.querySelectorAll("input");
let tBody = document.querySelector("tBody");
let form = document.querySelector("form");
let search = document.querySelector(".search");
let sortBtn = document.querySelector(".sortBtn");

const BASE_URL = "http://localhost:8080/products";

let productData;
let copyProductData;

async function getDataAll() {
  let res = await axios(`${BASE_URL}`);
  console.log(res.data);
  productData = res.data;
  copyProductData = [...res.data];
  drawTable(res.data);
}
getDataAll();

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    tBody.innerHTML += `
    <td>${element.text}</td>
    <td>${element.title}</td>
    <td><button class="deletCard" onclick=deletCard("${element.id}",this)>Delete</button></td>
    `;
  });
}
// delete
async function deletCard(id, btn) {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    btn.closest("tr").remove();
  } catch (error) {
    console.log(error);
  }
}

// post
form.addEventListener("submit", function (e) {
  e.preventDefault;
  let obj = {
    text: allInputs[0].value,
    title: allInputs[1].value,
  };
  try {
    axios.post(`${BASE_URL}`, obj);
  } catch (error) {
    console.log(error);
  }
});

// search

search.addEventListener("input", function (e) {
  let feltered = productData.filter((item) =>
    item.text.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawTable(feltered);
});

// sort

sortBtn.addEventListener("click", function () {
  console.log();
  let sorted;
  if (sortBtn.innerText === "Asc") {
    this.innerText = "Des";
    sorted = productData.sort((a, b) => a.id - b.id);
  }
 else  if (sortBtn.innerText === "Asc") {
    this.innerText = "Des";
    sorted = productData.sort((a, b) => b.id - a.id);
  }
  else if (sortBtn.innerText === "Asc") {
    sorted = copyProductData;
  }
});
