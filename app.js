/* Imports */

import { getPosts, getUser, signOut } from './fetch-utils.js';

/* Get DOM Elements */
const postsListEl = document.querySelector('.posts-list');
const authButtonEl = document.querySelector('#auth-button');
const createButtonEl = document.querySelector('#create-button');
/* State */
let posts = [];

/* Events */
window.addEventListener('load', async () => {
    const user = await getUser();

    if (user) { 
        authButtonEl.textContent = 'log out';
    }
    // FLORA
    // fetch all posts
    const postsResponse = await getPosts();

    posts = postsResponse;
    displayPosts();
});

authButtonEl.addEventListener('click', () => {
    if (getUser()) signOut();
    // we want to redirect the user to the auth page
    window.location.href = './auth';

});

createButtonEl.addEventListener('click', () => {
    // we want to redirect the user to the auth page
    window.location.href = './create';
});

/* Display Functions */
function displayPosts() {
    postsListEl.textContent = '';
    // loop
    for (let post of posts) {
        // pass object
        // into render function
        const postEl = document.createElement('div');
        const topicEl = document.createElement('h3');
        const messageEl = document.createElement('p');
        const contactEl = document.createElement('p');

        topicEl.textContent = post.topic;
        messageEl.textContent = post.message;
        contactEl.textContent = post.contact;

        postEl.classList.add('post');

        postEl.append(topicEl, messageEl, contactEl);
        // append to root dom
        postsListEl.append(postEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
