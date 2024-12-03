export function createCard(job) {
    return `
      <div class="card" style="width: 18rem; margin: 10px;">
          <div class="card-body">
              <h5 class="card-title">${job.title || 'N/A'}</h5>
              <p class="card-text"><strong>Description:</strong> ${job.description || 'N/A'}</p>
              <p class="card-text"><strong>Salary:</strong> ${job.salary || 'N/A'}</p>
              <p class="card-text"><strong>Employment Type:</strong> ${job.employmentType || 'N/A'}</p>
              <p class="card-text"><strong>Posted At:</strong> ${job.postedAt ? new Date(job.postedAt).toLocaleDateString() : 'N/A'}</p>
              <p class="card-text"><strong>Expires At:</strong> ${job.expiresAt ? new Date(job.expiresAt).toLocaleDateString() : 'N/A'}</p>
              <a href="#" class="btn btn-primary">Details</a>
              <button class="btn btn-outline-warning ${new Date(job.expiresAt) < new Date() ? 'disabled' : ''}">Apply</button>
          </div>
      </div>
    `;
}