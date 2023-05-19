
function validateForm(event) {
    event.preventDefault();

    document.querySelectorAll('.error').forEach(function (error) {
        error.textContent = '';
    });

    var login = document.getElementById('login').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phone = document.getElementById('phone').value;

 
    if (login.length < 3) {
        document.getElementById('loginError').textContent = 'Login musi mieć co najmniej 3 znaki.';
    }

   
    if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Nieprawidłowy adres email.';
    }

    
    if (!isValidPassword(password)) {
        document.getElementById('passwordError').textContent = 'Hasło musi mieć co najmniej 8 znaków i zawierać małe litery, wielkie litery oraz cyfry.';
    }

    
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Hasło nie pasuje.';
    }

    if (login.length >= 3 && isValidEmail(email) && isValidPassword(password) && password === confirmPassword) {
        alert('Rejestracja udana!');
        document.getElementById('registrationForm').reset();
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}
function isValidPhone(phone) {
    var phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
}

function isValidBirthdate(birthdate) {
    var today = new Date();
    var selectedDate = new Date(birthdate);
    var age = today.getFullYear() - selectedDate.getFullYear();
    var monthDiff = today.getMonth() - selectedDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
        age--;
    }
    return age >= 18;
}