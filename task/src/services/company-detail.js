const companyBtn = document.getElementById("company-btn");
const vacanciesBtn = document.getElementById("vacancies-btn");
const companyName = document.getElementById("company-name");
const content = document.getElementById("content");


const companyId = 3;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://shorthaired-lavish-hell.glitch.me/companies");
    const companies = await response.json();
    const company = companies.find((c) => c.id === companyId);
    if (company) {
      companyName.textContent = company.name;
    } else {
      companyName.textContent = "Company not found";
    }
  } catch (error) {
    companyName.textContent = "Error loading company name";
  }
});

companyBtn.addEventListener("click", async () => {
  content.innerHTML = "<p>Loading company information...</p>";
  try {
    const response = await fetch("https://shorthaired-lavish-hell.glitch.me/companies");
    const companies = await response.json();
    const company = companies.find((c) => c.id === companyId);
    if (company) {
      content.innerHTML = `
        <h3>Şirkət haqqında</h3>
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${company.name}</h5>
            <p class="card-text">${company.info}</p>
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


vacanciesBtn.addEventListener("click", async () => {
  content.innerHTML = "<p>Loading vacancies...</p>";
  try {
    const response = await fetch("https://shorthaired-lavish-hell.glitch.me/vacancies");
    const vacancies = await response.json();
    content.innerHTML = `
      <h3>Vakansiyalar</h3>
      ${vacancies.map(
      (vacancy) => `
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${vacancy.title}</h5>
              <p class="card-text">${vacancy.date}</p>
            </div>
          </div>
        `
    ).join("")}
    `;
  } catch (error) {
    content.innerHTML = `<p class="text-danger">Error loading vacancies!</p>`;
  }
});



