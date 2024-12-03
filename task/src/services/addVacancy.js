const form = document.getElementById('vacancyForm');
const notification = document.getElementById('notification');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const jobTitle = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const salary = document.getElementById('salary').value;
    const employmentType = document.getElementById('employmentType').value;
    const isActive = document.getElementById('isActive').checked;

    const vacancyData = {
        jobTitle,
        company,
        salary,
        employmentType,
        isActive
    };

    try {
        const response = await axios.post('https://shorthaired-lavish-hell.glitch.me/vacancies', vacancyData);

        if (response.status === 201) {
            notification.innerHTML = `<div class="alert alert-success">Vacancy added successfully!</div>`;
            form.reset(); 
        }
    } catch (error) {
        notification.innerHTML = `<div class="alert alert-danger">An error occurred while adding the vacancy. Please try again.</div>`;
    }
});