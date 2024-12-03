const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const jobData = getFormData();

    try {
        const response = await axios.post('https://flower-honeysuckle-empress.glitch.me/companies', jobData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        alert('Job successfully added!');
        console.log(response.data);
    } catch (error) {
        if (error.response) {
            alert(`Failed to add the job. Server responded with: ${error.response.data.message}`);
        } else {
            alert('Failed to add the job. Please check your network connection.');
        }
        console.error(error);
    }
});

function getFormData() {
    let candidates = [];
    try {
        candidates = JSON.parse(document.getElementById('candidateDetails').value || '[]');
    } catch {
        alert('Invalid JSON format for candidate details.');
        throw new Error('Invalid JSON');
    }

    return {
        title: document.getElementById('jobTitle').value,
        companyId: document.getElementById('companyId').value,
        description: document.getElementById('description').value,
        salary: document.getElementById('salary').value,
        postedAt: document.getElementById('postedAt').value,
        expiresAt: document.getElementById('expiresAt').value,
        employmentType: document.getElementById('employmentType').value,
        isActive: document.getElementById('isActive').checked,
        candidates: document.getElementById('candidateDetails').value
            ? JSON.parse(document.getElementById('candidateDetails').value)
            : [],
    };
}
