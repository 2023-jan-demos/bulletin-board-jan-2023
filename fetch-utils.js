const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUp(email, password) {
    const response = await client.auth.signUp({
        email: email,
        password: password,
    });

    if (response.error) return console.error(response.error);

    return response.data;
}

export async function signIn(email, password) {
    const booger = await client.auth.signInWithPassword({
        email: email,
        password: password,
    });

    // we can do this more DRY like so:
    // const { data } = await client.auth.signInWithPassword({
    //     email,
    //     password,
    // });

    return booger.data;
}

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('/auth');
}


export async function signOut() {
    const response = await client.auth.signOut();

    return response.error;
}

export async function getPosts() {
    const { data } = await client
        .from('posts')
        .select('*');

    return data;
}

export async function createPost(topic, message, contact) {
    const { data, error } = await client
        .from('posts')
        .insert([
            { 
                topic: topic, 
                message: message,
                contact: contact
            },
        ]);

    return data;
} 