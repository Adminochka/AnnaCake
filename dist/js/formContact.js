
document.addEventListener('DOMContentLoaded', function () {

    const formContact = document.getElementById('formContact');
    const nameForm = formContact.querySelector('[name="name"]');
    const emailForm = formContact.querySelector('[name="email"]');
    const messageForm = formContact.querySelector('[name="message"]');

    const emailRegexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // const emailRegexp = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);

    function validateName (value) {
        if (value === "") {
            return "Введите имя";
        }
    }

    function validateEmail (value) {
        if (value === "") {
            return "Введите e-mail";
        }
        if(emailRegexp.test(value) === false) {
            return "Введите корректный e-mail"
        }
    }

    function validateMessage (value) {
        if (value === "") {
            return "Введите сообщение";
        }
    }

    const formElements = {
        "name"    : formContact.querySelector('[name="name"]'),
        "email"   : formContact.querySelector('[name="email"]'),
        "message" : formContact.querySelector('[name="message"]'),
    }

    function renderErrors(errors) {

        Object.keys(errors).forEach((elenent) => {
            const parent = formElements[elenent].parentElement;
            const errorMessage = parent.querySelector('.errorMessage');
            if(errors[elenent]) {
                formElements[elenent].classList.add('error');
                errorMessage.innerText = errors[elenent];
            } else {
                formElements[elenent].classList.remove('error');
                errorMessage.innerText = '';
            }
        });
    }

    function checkForm() {

        const errors = {
            "name"    : validateName(nameForm.value),
            "email"   : validateEmail(emailForm.value),
            "message" : validateMessage(messageForm.value),
        };

        renderErrors(errors);

        return Object.values(errors).some((el) => Boolean(el));
    }

    formContact.addEventListener('blur', checkForm, true);

    formContact.addEventListener('submit', function(event) {

        if ( checkForm() === true) {
            event.preventDefault();
        }
    });

});
