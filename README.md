## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)


# Home / List Page
## HTML Setup
- Login Button
    - Why Navigate to the auth page
    - Why? It will change to logout when we detect a logged in user.
- Create Button
    - Why? Navigate us to the create page
- Empty div to inject the cards into

## Data Model 
- columns on our table, properties on our objects
- `posts`
    - topic: String
    - contact info: String
    - message: String
    
## Event
- load
    - check if user is logged in. if so, change it to a 'logout' button
    - FLORA:
        - fetch, 
        - loop, 
        - pass object
        - to render function, 
        - and append the posts to the DOM
- clicks login button
    - redirect to auth page
- click logout button
    - log out user, change the text on button to login again
- click create button
    - redirect to create page

# Auth Page
## HTML Setup
- Two forms: sign in, sign up

## Events
- on load, check if the user is logged in. if so, redirect them to the home page
- Submit the sign in form
    - get the email and password from the form
    - call signIn() auth function with the email and password
    - redirect them to the home page
- Submit the sign up form
    - get the email and password from the form
    - call signUp() auth function with the email and password
    - redirect them to the home page

# Create Page
## HTML setup
- "create a post" form

## Events
- on load, if there is a logged in user, redirect them to the home page
- on form submit
    - get data from the form
    - use the form data create a post in supabase
    - redirect user to the home

## Vertical Slices / User stories
- something should _always_ be working. 
- our code gets better incrementally, over time
- avoid working on "more than one thing as once"
- we can break them down even further
    - the whole app feels hard to build at once
    - however, each step should be easy
    - if each step is easy, and building an app is just following easy steps, then building an app will be easy

- User should be able to see a list of posts on load
- User should be able to go to the auth page and log in. The home page should indicate they are logged in by changing the button text to 'logout'.
- User should not be able to visit the create page if they are not logged in
- User should not be able to visit the auth page if they are logged in
- A logged in user should be able to visit the create page and create a post. On submit, they should be sent to the home page and their post should be visible.
    - on form submit
        - get data from the form
        - use the form data create a post in supabase
        - redirect user to the home
