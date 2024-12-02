
import { BASE_URL, endpoints } from "./constant/endpoints.js";
// import { deleteData } from "./utils/request.js";
import { renderCards } from "./utils/helpers.js";
import { getData } from "./utils/request.js";
import axios from "axios"


const search = document.querySelector("#search");
const button = document.querySelector(".btn-search")
const sort = document.querySelector("#select-by-name")
const form = document.querySelector(".form")
let datas = [];


document.addEventListener("DOMContentLoaded", async()=>{
  const response = await axios.get(BASE_URL + endpoints.vacancies)
  datas = await response.data;
  renderCards(datas)
})