
function initializeRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) return;

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const role = document.getElementById('registerRole').value;

        
        document.getElementById('registerEmailError').textContent = '';
        document.getElementById('registerPasswordError').textContent = '';

        
        if (!validateEmail(email)) {
            document.getElementById('registerEmailError').textContent = 'Invalid email format';
            return;
        }

       
        if (!validatePassword(password)) {
            document.getElementById('registerPasswordError').textContent = 
                'Password must be at least 8 characters, include uppercase, lowercase, and number';
            return;
        }

       
        const userId = Date.now(); 
        const userData = {
            name,
            email,
            role,
            userId: role === 'user' ? userId : null,
            companyId: role === 'company' ? userId : null
        };

        
        saveRegisteredUser(userData);

        
        Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'Please log in with your credentials',
            confirmButtonText: 'Go to Login'
        }).then(() => {
            
         const loginTab = document.getElementById('login-tab');
           loginTab.click()
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeRegisterForm);