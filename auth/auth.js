import { signUp } from '../fetch-utils.js';

const signUpForm = document.querySelector('.sign-up');

signUpForm.addEventListener('submit', async (e) => {
    // this will stop the 1996 internet feature of reloadin the page on submit
    e.preventDefault();

    // - get the email and password from the form
    const data = new FormData(signUpForm);

    // - call signUp() auth function with the email and password
    await signUp(data.get('email'), data.get('password'));

    // - redirect them to the home page
    window.location.href = '../';
});