const companyBtn = document.getElementById("company-btn");
const vacanciesBtn = document.getElementById("vacancies-btn");
const companyName = document.getElementById("company-name");
const content = document.getElementById("content");

const companyId = new URLSearchParams(window.location.search).get("id"); // Change this to match your company ID

// Load company name on page load
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://shorthaired-lavish-hell.glitch.me/companies");
    const companies = await response.json();
    console.log(companies);
    console.log(companyId);
    const company = companies.find((c) => c.id == companyId);
    if (company) {
      companyName.textContent = company.name;
    } else {
      companyName.textContent = "Company not found";
    }
  } catch (error) {
    companyName.textContent = "Error loading company name";
  }
});

// "Şirkət haqqında" button click - Show company info
companyBtn.addEventListener("click", async () => {
  content.innerHTML = "<p>Loading company information...</p>";
  try {
    const response = await fetch("https://shorthaired-lavish-hell.glitch.me/companies");
    const companies = await response.json();
    const company = companies.find((c) => c.id == companyId);
    if (company) {
      content.innerHTML = `
        <h3>Şirkət haqqında</h3>
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${company.name}</h5>
            <p class="card-text">${company.location}</p>
            <p class="card-text">${company.industry}</p>
            <p class="card-text">${company.createdAt}</p>
            <p class="card-text">${company.website}</p>
            
          </div>
        </div>
      `;
    } else {
      content.innerHTML = `<p>No company found with ID ${companyId}</p>`;
    }
  } catch (error) {
    content.innerHTML = `<p class="text-danger">Error loading company information!</p>`;
  }
});

// "Vakansiyalar" button click - Show vacancies for the company
vacanciesBtn.addEventListener("click", async () => {
  content.innerHTML = "<p>Loading vacancies...</p>";
  try {
    const response = await fetch("https://shorthaired-lavish-hell.glitch.me/vacancies");
    const vacancies = await response.json();
    const filteredVacancies = vacancies.filter((vacancy) => vacancy.companyId == companyId); // Filter vacancies by companyId

    if (filteredVacancies.length > 0) {
      content.innerHTML = `
        <h3>Vakansiyalar</h3>
        ${filteredVacancies.map(
          (vacancy) => `
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${vacancy.title}</h5>
                <p class="card-text">${vacancy.postedAt}</p>
              </div>
            </div>
          `
        ).join("")}
      `;
    } else {
      content.innerHTML = `<p>No vacancies found for this company.</p>`;
    }
  } catch (error) {
    content.innerHTML = `<p class="text-danger">Error loading vacancies!</p>`;
  }
});



