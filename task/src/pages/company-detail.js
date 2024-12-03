
import API from "../constant/api.js"

const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("id");


const jobDetailsContainer = document.getElementById("job-details");


async function fetchJobDetails() {
    try {
        const response = await fetch(`${API}jobs/${jobId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch job details");
        }

        const job = await response.json();
        renderJobDetails(job);
    } catch (error) {
        console.error("Error fetching job details:", error);
        jobDetailsContainer.innerHTML = `
      <div class="alert alert-danger text-center" role="alert">
        Unable to load job details. Please try again later.
      </div>
    `;
    }
}


function renderJobDetails(job) {
    const {
        title,
        description,
        salary,
        postedAt,
        expiresAt,
        employmentType,
        isActive,
        candidates,
    } = job;

    jobDetailsContainer.innerHTML = `
    <div class="col-md-8">
      <h2>${title}</h2>
      <p><strong>Employment Type:</strong> ${employmentType}</p>
      <p><strong>Salary:</strong> ${salary}</p>
      <p><strong>Posted At:</strong> ${new Date(postedAt).toLocaleDateString()}</p>
      <p><strong>Expires At:</strong> ${new Date(expiresAt).toLocaleDateString()}</p>
      <p><strong>Status:</strong> ${isActive ? "Active" : "Closed"}</p>
      <hr>
      <h5>Description</h5>
      <p>${description}</p>
      <hr>
      <h5>Candidates</h5>
      <ul>
        ${candidates
            .map(
                (candidate) => `
          <li>
            <strong>Candidate ID:</strong> ${candidate.candidateId}, 
            <strong>Status:</strong> ${candidate.status}, 
            <a href="${candidate.linkedinUrl}" target="_blank">LinkedIn</a>
          </li>
        `
            )
            .join("")}
      </ul>
    </div>
  `;
}


fetchJobDetails();

