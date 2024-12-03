import { BASE_URL, endpoints} from "../constant/endpoints.js";
import { deleteData } from "../utils/request.js";
import axios from "axios"
import Swal from "sweetalert2";

const listRow = document.querySelector(".list-row")

export function renderCards(array) {
    listRow.innerHTML = ""
    array.forEach(vacancy => {
        listRow.innerHTML +=
        `<div class="cols col-xs-12 col-sm-6 col-mb-3 col-lg-3 col-xl-3 g-4">
            <div class="card h-100">
                <div class="card-body">
                <h5 class="card-title">${vacancy.title}</h5>
                <p class="card-text"><span style="font-weight: 700;">Description</span>: ${vacancy.description}</p>
                <p class="card-text"><span style="font-weight: 700;">Salary</span>: ${vacancy.salary}</p>
                <p class="card-text"><span style="font-weight: 700;">PostedAt</span>: ${vacancy.postedAt}</p>
                <p class="card-text"><span style="font-weight: 700;">ExpiresAt</span>: ${vacancy.expiresAt}</p>
                <p class="card-text"><span style="font-weight: 700;">Parent Company</span>: ${vacancy.employmentType}</p>
                <button type="button" data-id="${vacancy.id}" class="btn-detail button">Details >></button>
                <button type="button" data-del="${vacancy.id}" class="btn-del btn btn-danger"><i class="bi bi-trash"></i></button>
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