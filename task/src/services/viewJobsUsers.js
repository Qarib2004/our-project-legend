// import Swal from "sweetalert2";

const apiURL = "https://flower-honeysuckle-empress.glitch.me/users/";

async function fetchData() {
  try {
    // API-dən məlumatları çəkirik
    const response = await fetch(apiURL);
    const data = await response.json();
    displayData(data); // Məlumatları səhifədə göstəririk
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData(users) {
  const container = document.getElementById("details-container");

  users.forEach((user) => {
    // Bootstrap ilə kart strukturu
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body text-center">
          <img src="${user.profileImage}" alt="${user.name}">
          <h5 class="card-title mt-3">${user.name}</h5>
          <p class="card-text"><strong>Email:</strong> ${user.email}</p>
          <p class="card-text"><strong>Experience:</strong> ${user.experienceYear} years</p>
          <p class="card-text">${user.bio}</p>
          <a href="${user.linkedinUrl}" class="btn btn-primary btn-sm" target="_blank">LinkedIn Profile</a>
        </div>
        <ul class="list-group list-group-flush skills-list mt-3 px-3">
          <li class="list-group-item fw-bold">Skills:</li>
          ${user.skills.map((skill) => `<li class="list-group-item">${skill}</li>`).join("")}
        </ul>
      </div>
    `;

    container.appendChild(card);
  });
}

// Məlumatları yükləmək üçün funksiyanı çağırırıq
fetchData();
