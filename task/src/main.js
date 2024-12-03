
import { BASE_URL, endpoints } from "./constant/endpoints.js";
import { renderCards, renderCardsUser } from "./utils/helpers.js";
import { renderCardsCompany } from "./utils/helpers.js";
import axios from 'axios';



const search = document.querySelector("#search");
const sort = document.querySelector("#select-by-name")
const form = document.querySelector(".form")
let datas = [];
let datasCompany = [];
let datasUser = [];


document.addEventListener("DOMContentLoaded", async()=>{
  const response = await axios.get(`${BASE_URL}${endpoints.vacancies}`)
  datas = await response.data;
  renderCards(datas)
})

document.addEventListener("DOMContentLoaded", async()=>{
  const response = await axios.get(`${BASE_URL}${endpoints.companies}`)
  datasCompany = await response.data;
  renderCardsCompany(datasCompany)
})


document.addEventListener("DOMContentLoaded", async()=>{
  const response = await axios.get(`${BASE_URL}${endpoints.users}`)
  datasUser = await response.data;
  renderCardsUser(datasUser)
})


function selectByName(value) {
  
  let keyword;
  switch (value) {
    case "a-z":
      keyword = [...datas].sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "z-a":
      keyword = [...datas].sort((a, b) => b.title.localeCompare(a.title));
      break;  
  
    default:
      keyword = [...datas]
      break;
  }
  renderCards(keyword)
  renderCardsCompany(keyword)
  renderCardsUser(keyword)
}
sort.addEventListener("change", (e)=>{
  selectByName(e.target.value)
})

form.addEventListener("submit", (e)=>{
  e.preventDefault();

})  

function SearchCards(element) {
  const card = [...datas].filter(value => value.title.trim().toUpperCase().includes(element.trim().toUpperCase()))
  renderCards(card)
  renderCardsCompany(card)
  renderCardsUser(card)
}
search.addEventListener("input", (e)=>{
  SearchCards(e.target.value)
})
// import './style.css'


// document.querySelector('#app').innerHTML = `
//   <div>
   
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

