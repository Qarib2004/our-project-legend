document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[type="submit"]');
    const formElement = document.getElementById('companyForm'); 

    submitButton.addEventListener('click', async (event) => {
        event.preventDefault(); 

        const companyData = {
            name: document.getElementById('name').value,
            location: document.getElementById('location').value,
            industry: document.getElementById('industry').value,
            createdAt: document.getElementById('createdAt').value,
            website: document.getElementById('website').value,
            postedAt: document.getElementById('postedAt').value,
            expiresAt: document.getElementById('expiresAt').value,
            isActive: document.getElementById('isActive').checked,
        };

        try {
            const response = await axios.post('https://shorthaired-lavish-hell.glitch.me/companies', companyData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
            

            alert('Company successfully added!');
            formElement.reset(); 
        } catch (error) {
            if (error.response) {
                alert(`Failed to add the company. Server responded with: ${error.response.data.message}`);
            } else {
                alert('Failed to add the company. Please check your network connection.');
            }
            console.error('Error:', error);
        }
    });
});
