import { BASE_URL, endpoints } from "../constant/endpoints.js";
import { deleteData } from "../utils/request.js";
import axios from "axios";
import Swal from "sweetalert2";

const listRow = document.querySelector(".list-row");
const listRowCompany = document.querySelector(".list-row-company");
const listRowUser = document.querySelector(".list-row-user");

export function renderCards(array) {
  listRow.innerHTML = "";
  array.forEach((vacancy) => {
    listRow.innerHTML += `<div class="cols col-xs-12 col-sm-6 col-mb-3 col-lg-3 col-xl-3 g-4">
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


//   const detailBtnCompany = document.querySelectorAll(".btn-detail");
//   detailCompany(detailBtnCompany);
//  console.log(detailBtnCompany)
  const deleteBtn = document.querySelectorAll(".btn-del");
  deleteCard(deleteBtn);
 }

// export function detailCompany(btn) {
//   btn.forEach((button) => {
//     button.addEventListener("click", () => {
//       window.location.href = "../pages/company-detail.html";

//     });
//   });
// }



export function renderCardsCompany(array) {
  listRowCompany.innerHTML = "";
  array.forEach((company) => {
    listRowCompany.innerHTML += `<div class="cols col-xs-12 col-sm-6 col-mb-3 col-lg-3 col-xl-3 g-4">
          <div class="card h-100">
              <div class="card-body">
              <h5 class="card-title">${company.name}</h5>
              <p class="card-text"><span style="font-weight: 700;">Location</span>: ${company.location}</p>
              <p class="card-text"><span style="font-weight: 700;">Industry</span>: ${company.industry}</p>
              <p class="card-text"><span style="font-weight: 700;">CreatedAt</span>: ${company.createdAt}</p>
              <p class="card-text"><span style="font-weight: 700;">Website</span>: ${company.website}</p>
              <button type="button" data-id="${company.id}" class="btn-detail-com button">Details >></button>
              <button type="button" data-del="${company.id}" class="btn-del-com btn btn-danger"><i class="bi bi-trash"></i></button>
          </div>
      </div>
`;


  });

  const detailBtnCompany = document.querySelectorAll(".btn-detail-com");
  detailCompany(detailBtnCompany);

  const deleteBtnComp = document.querySelectorAll(".btn-del-com");
  deleteCardCompany(deleteBtnComp);
}

export function detailCompany(btn) {
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "../../src/pages/company-detail.html?id="+button.dataset.id;

    });
  });
}










export function renderCardsUser(array) {
  listRowUser.innerHTML = "";
  array.forEach((user) => {
    listRowUser.innerHTML += `<div class="cols col-xs-12 col-sm-6 col-mb-3 col-lg-3 col-xl-3 g-4">
        <div class="card h-100">
        <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text"><span style="font-weight: 700;">Email</span>: ${user.email}</p>
        <p class="card-text"><span style="font-weight: 700;">Created At</span>: ${user.createdAt}</p>
        <p class="card-text"><span style="font-weight: 700;">Profile Image</span>: ${user.profileImage}</p>
        <p class="card-text"><span style="font-weight: 700;">linkedin Url</span>: ${user.linkedinUrl}</p>
        <p class="card-text"><span style="font-weight: 700;">Experience Year</span>: ${user.experienceYear}</p>
        <p class="card-text"><span style="font-weight: 700;">Bio</span>: ${user.bio}</p>
        <button type="button" data-id="${user.id}" class="btn-detail-user button">Details >></button>
        <button type="button" data-del="${user.id}" class="btn-del-user btn btn-danger"><i class="bi bi-trash"></i></button>
        </div>
    </div>
`;
  });

  const detailBtnUser = document.querySelectorAll(".btn-detail-user");
  detailUser(detailBtnUser);

  const deleteBtnUser = document.querySelectorAll(".btn-del-user");
  deleteCardUser(deleteBtnUser);
}
export function detailUser(btn) {
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "../../src/pages/viewJobsUsers.html";

    });
  });
}

function deleteCardUser(button) {
  button.forEach((btn) => {
    console.log(btn);

    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-del");
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          e.target.closest(".cols").remove();
          const response = await axios.delete(
            `${BASE_URL}${endpoints.user}/${id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your vacancy has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}




function deleteCard(button) {
  button.forEach((btn) => {
    console.log(btn);

    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-del");
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          e.target.closest(".cols").remove();
          const response = await axios.delete(
            `${BASE_URL}${endpoints.vacancies}/${id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your vacancy has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}



function deleteCardCompany(button) {
  button.forEach((btn) => {
    console.log(btn);

    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-del");
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          e.target.closest(".cols").remove();
          const response = await axios.delete(
            `${BASE_URL}${endpoints.companies}/${id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your vacancy has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}
