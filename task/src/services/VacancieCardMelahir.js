const VacanciesContainer=document.querySelector(".common")
console.log(VacanciesContainer)
const API="https://shorthaired-lavish-hell.glitch.me/vacancies/"

async function FetchDisplayData(){
    try{
        const response=await fetch(API)
        const data= await response.json()
        console.log(data)
        displayData(data)
        console.log(data)
    }
    catch(err){
console.log("Something went error",err)
    }

}
FetchDisplayData()
function displayData(data){
    data.forEach(vacancy => {
        const VacancyTemplate=`
        <div style="justify-content:center; display: flex;">
 <div><img class="card-img-top"  height="220 vh" width="320 vw" src="./../assets/Modern design of we are hiring vector_ Job vacancy design background vector_.jpeg">

        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="cardtitle">${vacancy.title}</h5>
              <p class="cardtext">${vacancy.description}</p>
                <h5 class="cardtitle">${vacancy.salary}</h5>

              <button onclick="window.location='./viewJobs.html?id=${vacancy.id}'"  class="btnprimary">Go Details</button></div>
              
            </div>
          </div>
        </div>
        </div>
        `;
    VacanciesContainer.insertAdjacentHTML("beforeend",VacancyTemplate)
        
    });
}