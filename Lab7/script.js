function checkValue(fieldId) {
    return document.getElementById(fieldId).value.trim() !== '';
}

function checkLength(fieldId, minLength) {
    return document.getElementById(fieldId).value.length >= minLength;
}

function checkEmail(fieldId) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById(fieldId).value);
}

function checkPasswordStrength(fieldId, minLength) {
    return document.getElementById(fieldId).value.length >= minLength;
}

function validatePasswordMatch() {
    const password = document.getElementById('pass').value;
    const repeatPassword = document.getElementById('pass2').value;
    const passwordMatchError = document.getElementById('password2Error');

    if (password !== repeatPassword) {
        passwordMatchError.textContent = "*passwords don't match";
        document.getElementById('pass2').setCustomValidity("*passwords don't match");
    } else {
        passwordMatchError.textContent = "";
        document.getElementById('pass2').setCustomValidity('');
    }
}

function limitPhoneToDigits(event) {
    const phoneField = document.getElementById('tel');
    phoneField.value = phoneField.value.replace(/\D/g, '');
}
function toggleCorrespondenceAddress() {
    const checkbox = document.getElementById('korespondencyjny');
    const correspondenceAddress = document.getElementById('adresKorespondencyjny');
    const correspondenceAddressBlock = document.getElementById('input_mailing_address');

    if (checkbox.checked) {
        correspondenceAddress.disabled = true;
        correspondenceAddress.value = "";
        correspondenceAddressBlock.style = "display: none;"
    } else {
        correspondenceAddressBlock.style = "display: flex;"
        if (document.getElementById('wojewodztwo').value || document.getElementById('wojewodztwo-input').value) 
            correspondenceAddress.disabled = false;
    }
}

function updateVoivodeshipField() {
    const country = document.getElementById('cou').value.toLowerCase();
    const voivodeshipField = document.getElementById('wojewodztwo');
    const voivodeshipInput = document.getElementById('wojewodztwo-input');

    if (country === "poland") {
        voivodeshipField.style = "display: block;"
        voivodeshipField.disabled = false;
        voivodeshipField.innerHTML = `
        <option value="Zachodniopomorskie">Zachodniopomorskie</option>
        <option value="Pomorskie">Pomorskie</option>
        <option value="Warmińsko-Mazurskie">Warmińsko-Mazurskie</option>
        <option value="Lubuskie">Lubuskie</option>
        <option value="Wielkopolskie">Wielkopolskie</option>
        <option value="Kujawsko-Pomorskie">Kujawsko-Pomorskie</option>
        <option value="Mazowieckie">Mazowieckie</option>
        <option value="Podlaskie">Podlaskie</option>
        <option value="Dolnośląskie">Dolnośląskie</option>
        <option value="Łódzkie">Łódzkie</option>
        <option value="Lubelskie">Lubelskie</option>
        <option value="Opolskie">Opolskie</option>
        <option value="Śląskie">Śląskie</option>
        <option value="Świętokrzyskie">Świętokrzyskie</option>
        <option value="Małopolskie">Małopolskie</option>
        <option value="Podkarpackie">Podkarpackie</option>
        `;
        voivodeshipInput.disabled = true;
        voivodeshipInput.style = "display: none;"
    } else if (country != "-") {
        voivodeshipField.disabled = true;
        voivodeshipField.style = "display: none;"
        voivodeshipField.innerHTML = "";
        voivodeshipInput.disabled = false;
        voivodeshipInput.style = "display: flex;"
    } else {
        voivodeshipField.disabled = true;
        voivodeshipField.style = "display: none;"
        voivodeshipField.innerHTML = "";
        voivodeshipInput.disabled = true;
        voivodeshipInput.style = "display: flex;"
    }

    toggleAddressInput();
}

updateVoivodeshipField();

function toggleAddressInput() {
    const country = document.getElementById('cou').value.toLowerCase();
    const voivodeshipField = document.getElementById('wojewodztwo');
    const voivodeshipInput = document.getElementById('wojewodztwo-input');
    
    if ((voivodeshipField.value && country == 'poland') || (voivodeshipInput.value && country == 'other')) {
        document.getElementById('adresKorespondencyjny').disabled = false;
        document.getElementById('adres').disabled = false;
    } else {
        document.getElementById('adresKorespondencyjny').disabled = true;
        document.getElementById('adres').disabled = true;
    }
}
function validateForm(event) {
    event.preventDefault();

    const nameValid = checkValue('fname');
    const surnameValid = checkValue('lname');
    const emailValid = checkEmail('email');
    const passwordValid = checkLength('pass', 8);
    const dobValid = new Date(document.getElementById('dob').value) <= new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
    const passwordMatch = document.getElementById('pass').value === document.getElementById('pass2').value;
    const errorMessages = document.querySelectorAll('.error-message');

    errorMessages.forEach(error => error.textContent = ''); 
    if (!nameValid) document.getElementById('nameError').textContent = '*please enter your name';
    if (!surnameValid) document.getElementById('surnameError').textContent = '*please enter your surname';  
    if (!emailValid)  document.getElementById('emailError').textContent = '*please enter a valid email address';
    if (!passwordValid) document.getElementById('passwordError').textContent = '*password must be at least 8 characters long';
    if (!dobValid)  document.getElementById('dobError').textContent = '*you must be at least 18 years old';
    if (!passwordMatch) document.getElementById('password2Error').textContent = "*passwords don't match";

    (nameValid && surnameValid && emailValid && passwordValid && dobValid && passwordMatch) ? event.target.form.submit() : false;
}
document.getElementById('korespondencyjny').addEventListener('change', toggleCorrespondenceAddress);
document.getElementById('cou').addEventListener('change', updateVoivodeshipField);
document.getElementById('tel').addEventListener('input', limitPhoneToDigits);




class Pytanie {
    constructor(tresc, odpowiedz) {
        this.tresc = tresc;
        this.odpowiedz = odpowiedz;
    }
}

class Quiz {
    constructor() {
        this.pytania = [];
    }

    dodajPytanie(pytanie) {
        this.pytania.push(pytanie);
    }

    wyswietlPytania() {
        const questionList = document.getElementById('question-list');
        questionList.innerHTML = '';
        this.pytania.forEach((pytanie, index) => {
            const questionItem = document.createElement('div');
            questionItem.textContent = `Pytanie ${index + 1}: ${pytanie.tresc} - Odpowiedź: ${pytanie.odpowiedz}`;
            questionList.appendChild(questionItem);
        });
    }
}

const quiz = new Quiz();

function addQuestion() {
    const questionInput = document.getElementById('question').value;
    const answerInput = document.getElementById('answer').value;

    if (questionInput.trim() !== '' && answerInput.trim() !== '') {
        const pytanie = new Pytanie(questionInput, answerInput);
        quiz.dodajPytanie(pytanie);
        quiz.wyswietlPytania();
        document.getElementById('quiz-form').reset();
    } else {
        alert('Wpisz treść pytania oraz odpowiedź.');
    }
}