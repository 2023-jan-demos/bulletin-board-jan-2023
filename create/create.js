import { checkAuth, createPost, getUser } from '../fetch-utils.js';

// check if the user is logged in
// if not, send them to the home page
// if there is no user
checkAuth();

const createForm = document.querySelector('.create-form');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get data from form
    const formData = new FormData(createForm);

    const topic = formData.get('topic');
    const message = formData.get('message');
    const contact = formData.get('contact');

    // create a post
    const post = await createPost(topic, message, contact);

    // send the user back home
    window.location.href = '../';
});