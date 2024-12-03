import { BASE_URL, endpoints} from "../constant/endpoints.js";
import { deleteData } from "../utils/request.js";
import axios from "axios"
import Swal from "sweetalert2";

const listRow = document.querySelector(".list-row")
const listRowCompany = document.querySelector(".list-row-company")
const listRowUser = document.querySelector(".list-row-user")



export function renderCards(array) {
    listRow.innerHTML = ""
    array.forEach(company => {
        listRow.innerHTML +=
        `<div class="cols col-xs-12 col-sm-6 col-mb-3 col-lg-3 col-xl-3 g-4">
            <div class="card h-100">
                <div class="card-body">
                <h5 class="card-title">${company.title}</h5>
                <p class="card-text"><span style="font-weight: 700;">Description</span>: ${company.description}</p>
                <p class="card-text"><span style="font-weight: 700;">Salary</span>: ${company.salary}</p>
                <p class="card-text"><span style="font-weight: 700;">PostedAt</span>: ${company.postedAt}</p>
                <p class="card-text"><span style="font-weight: 700;">ExpiresAt</span>: ${company.expiresAt}</p>
                <p class="card-text"><span style="font-weight: 700;">Parent Company</span>: ${company.employmentType}</p>
                <button type="button" data-id="${company.id}" class="btn-detail button">Details >></button>
                <button type="button" data-del="${company.id}" class="btn-del btn btn-danger"><i class="bi bi-trash"></i></button>
            </div>
        </div>
  `;
    });
    
    const deleteBtn = document.querySelectorAll(".btn-del");
    deleteCard(deleteBtn)
}




export function renderCardsCompany(array) {
  listRowCompany.innerHTML = ""
  array.forEach(company => {
      listRowCompany.innerHTML +=
      `<div class="cols col-xs-12 col-sm-6 col-mb-3 col-lg-3 col-xl-3 g-4">
          <div class="card h-100">
              <div class="card-body">
              <h5 class="card-title">${company.name}</h5>
              <p class="card-text"><span style="font-weight: 700;">Location</span>: ${company.location}</p>
              <p class="card-text"><span style="font-weight: 700;">Industry</span>: ${company.industry}</p>
              <p class="card-text"><span style="font-weight: 700;">CreatedAt</span>: ${company.createdAt}</p>
              <p class="card-text"><span style="font-weight: 700;">Website</span>: ${company.website}</p>
              <p class="card-text"><span style="font-weight: 700;">Experience Year</span>: ${company.experienceYear}</p>
              <p class="card-text"><span style="font-weight: 700;">Bio</span>: ${company.bio}</p>
              <button type="button" data-id="${company.id}" class="btn-detail button">Details >></button>
              <button type="button" data-del="${company.id}" class="btn-del btn btn-danger"><i class="bi bi-trash"></i></button>
          </div>
      </div>
`;
  });
  
  const deleteBtn = document.querySelectorAll(".btn-del");
  deleteCard(deleteBtn)
}



export function renderCardsUser(array) {
listRowUser.innerHTML = ""
array.forEach(user => {
    listRowUser.innerHTML +=
    `<div class="cols col-xs-12 col-sm-6 col-mb-3 col-lg-3 col-xl-3 g-4">
        <div class="card h-100">
        <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text"><span style="font-weight: 700;">Email</span>: ${user.email}</p>
        <p class="card-text"><span style="font-weight: 700;">Created At</span>: ${user.createdAt}</p>
        <p class="card-text"><span style="font-weight: 700;">Profile Image</span>: ${user.profileImage}</p>
        <p class="card-text"><span style="font-weight: 700;">linkedin Url</span>: ${user.linkedinUrl}</p>
        <p class="card-text"><span style="font-weight: 700;">Experience Year</span>: ${user.experienceYear}</p>
        <p class="card-text"><span style="font-weight: 700;">Bio</span>: ${user.bio}</p>
        <button type="button" data-id="${user.id}" class="btn-detail button">Details >></button>
        <button type="button" data-del="${user.id}" class="btn-del btn btn-danger"><i class="bi bi-trash"></i></button>
        </div>
    </div>
`;
});

const deleteBtn = document.querySelectorAll(".btn-del");
deleteCard(deleteBtn)
}



function deleteCard(button){
    button.forEach((btn)=>{

        console.log(btn);
        
        btn.addEventListener("click", (e)=>{
            const id = btn.getAttribute("data-del");
            Swal.fire({
                title: "Are you sure to delete?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then(async (result)=>{
                if (result.isConfirmed) {
                  e.target.closest(".cols").remove();
                  const response = await axios.delete(`${BASE_URL}${endpoints.vacancies}/${id}`)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your vacancy has been deleted.",
                    icon: "success",
                  });
                }
              })
        })
    })
}