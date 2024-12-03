const VacancyID=document.querySelector("#vacancy-container")
console.log(VacancyID)


async function FetchVacancies(){
    const VacancyId=new URLSearchParams(window.location.search).get("id")
const response=await fetch(`https://shorthaired-lavish-hell.glitch.me/vacancies/${VacancyId}`)
Vacancies=await response.json();
console.log(Vacancies)
console.log(Vacancies,VacancyId)
displayVacancy(Vacancies)
}
function displayVacancy(Vacancies){

  if(Vacancies.title==="Frontend Developer"){
    VacancyID.innerHTML=`
    <div class="container mt-5" id="vacancy-container">
    <div class="row">
      <div class="col-md-8">
        <img src="./../assets/Get my art printed on awesome products_ Support me….jpeg" style="width: 40vw;height: 50vh;"></img>
        </div></div></div>`
  }
  else if(Vacancies.title==="Backend Developer"){
    VacancyID.innerHTML=`
    <div class="container mt-5" id="vacancy-container">
    <div class="row">
      <div class="col-md-8">
        <img src="./../assets/Get my art printed on awesome products_ Support me… (1).jpeg" style="width: 40vw;height: 50vh;"></img>
        </div></div></div>`
  }
  else if(Vacancies.title==="Mobile Developer"){
    VacancyID.innerHTML=`
    <div class="container mt-5" id="vacancy-container">
    <div class="row">
      <div class="col-md-8">
        <img src="./../assets/c5cf37c0-c07e-4bf4-817e-81aef83eb668.jpeg" style="width: 40vw;height: 50vh;"></img>
        </div></div></div>`
  }
  else{
    VacancyID.innerHTML=`
    <div class="container mt-5" id="vacancy-container">
    <div class="row">
      <div class="col-md-8">
        <img src="./../assets/Modern design of we are hiring vector_ Job vacancy design background vector_.jpeg" style="width: 40vw;height: 50vh;"></img>
        </div></div></div>`
  }


    VacancyID.innerHTML+=`

    <div class="container mt-5" id="vacancy-container">
    <div class="row">
      <div class="col-md-8">
        <h2 class="mb3">${Vacancies.title}</h2>
        <p><strong>CompanyId: </strong>${Vacancies.companyId}.</p>
        <p><strong>Salary: </strong> ${Vacancies.salary}</p>
        <p><strong>Posted At: </strong> ${Vacancies.postedAt}</p>
        <p><strong>expiresAt: </strong>${Vacancies.expiresAt}</p>
        <p><strong>employmentType: </strong>${Vacancies.employmentType}</p>
        <p><strong>isActive: </strong>${Vacancies.isActive}</p>

        <hr>
        <h4>Job Description</h4>
        <p>${Vacancies.description}</p>
        <hr>`
        Vacancies.candidates.forEach(candidate => {
        VacancyID.innerHTML+=`
        <h4>Condidates:</h4>

        <ul>
        <p><strong>candidateId: </strong> ${candidate.candidateId}</p>
        <p><strong>AppliedAt: </strong>${candidate.appliedAt}</p>
        <p><strong>LinkedinURL: </strong>${candidate.linkedinUrl}</p>
        <p><strong>status: </strong>${candidate.status}</p>
        </ul>
        
        <hr>`})
        VacancyID.innerHTML+=`
        <button class="btn btn-primary">Apply Now</button>
        <button onclick="window.location='./Vacancies.html'" class="btn btn-danger">Go Back</button>
          
      </div>
      <div class="col-md-4">
        <h5>Site Team About</h5>
        <p>Site Team is created in 02.12.2024 for CodeAcademy Task , GoodLucks.</p>
      </div>
    </div>
  </div>
    `


}
FetchVacancies()