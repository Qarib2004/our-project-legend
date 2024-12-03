
import { BASE_URL, endpoints } from "./constant/endpoints.js";
import { renderCards } from "./utils/helpers.js";
import axios from "axios"


const search = document.querySelector("#search");
const sort = document.querySelector("#select-by-name")
const form = document.querySelector(".form")
let datas = [];


document.addEventListener("DOMContentLoaded", async()=>{
  const response = await axios.get(BASE_URL + endpoints.vacancies)
  datas = await response.data;
  renderCards(datas)
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
}
search.addEventListener("input", (e)=>{
  SearchCards(e.target.value)
})