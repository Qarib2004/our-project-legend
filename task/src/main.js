
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


function selectByTitle(value) {
  
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
}


function selectByName(value) {
  
  let keyword;
  switch (value) {
    case "a-z":
      keyword = [...datasCompany].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-a":
      keyword = [...datasCompany].sort((a, b) => b.name.localeCompare(a.name));
      break;  
  
    default:
      keyword = [...datasCompany]
      break;
  }
  renderCardsCompany(keyword)
  renderCardsUser(keyword)
}


function selectByNameUser(value) {
  
  let keyword;
  switch (value) {
    case "a-z":
      keyword = [...datasUser].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-a":
      keyword = [...datasUser].sort((a, b) => b.name.localeCompare(a.name));
      break;  
  
    default:
      keyword = [...datasUser]
      break;
  }
  renderCardsUser(keyword)
}
sort.addEventListener("change", (e)=>{
  selectByNameUser(e.target.value)
  selectByTitle(e.target.value)
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
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchData } from './services/jobServices';
import { createCard } from './services/card';

async function initializeApp() {
  const app = document.querySelector('#app');
  const jobData = await fetchData();

  if (!jobData || jobData.length === 0) {
    app.innerHTML = `<p>No jobs available at the moment.</p>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  jobData.forEach((job) => {
    const cardHtml = createCard(job);
    const div = document.createElement('div');
    div.innerHTML = cardHtml;
    fragment.appendChild(div);
  });

  app.appendChild(fragment);
}

initializeApp();
