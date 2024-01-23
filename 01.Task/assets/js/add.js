let allInputs = document.querySelectorAll("input");
let tBody = document.querySelector("tbody");
let form = document.querySelector("form");
let search = document.querySelector(".search");
let sortBtn = document.querySelector(".sortBtn");

const BASE_URL = "";

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
  arr.forEach(element => {
    tBody.innerHTML+=`
    <td>${element.text}</td>
    <td>${element.title}</td>
    <td><button class="deletCard" onclick=deletCard("${element.id}",this)></button></td>
    `
  });
}
