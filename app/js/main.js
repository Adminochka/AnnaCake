$(function (){

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });

});

document.addEventListener('DOMContentLoaded', function () {

    let contactForm = document.querySelector('.js-contactForm');
    let contactFormInputs = document.querySelectorAll('.js-contactForm__input');
    let contactFormTextarea = document.querySelectorAll('.js-contactForm__textarea');
    let contactFormEmail = document.querySelector('.js-contactForm__input-email');
    let contactFormCheckbox = document.querySelector('.js-contactForm__checkbox');

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    contactForm.onsubmit = function () {

        let contactFormEmailVal = contactFormEmail.value;
        emptyInputs = Array.from(contactFormInputs).filter(input => input.value === '');

        contactFormInputs.forEach( function (input) {
            if (input.value === '') {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        contactFormTextarea.forEach( function (textarea) {
            if (textarea.value === '') {
                textarea.classList.add('error');
            } else {
                textarea.classList.remove('error');
            }
        });

        if (emptyInputs.length !== 0) {
            console.log('inputs not filled');
            return false;
        }

        if(!validateEmail(contactFormEmailVal)) {
            console.log('email not valid');
            contactFormEmail.classList.add('error');
            return false;
        } else {
            contactFormEmail.classList.remove('error');
        }

        if(!contactFormCheckbox.checked) {
            console.log('checkbox not checked');
            contactFormCheckbox.classList.add('error');
            return false;
        } else {
            contactFormCheckbox.classList.remove('error')
        }
    }
});
