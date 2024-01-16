import axios from "axios";

const API_KEY = "AIzaSyBDYzRFFrcCefMu6YUZWDzgf_9sm3bkCAk";

// signup URL - https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// login URL - https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

async function authenticate(mode, email, password) {
    // mode = signUp for signup
    // mode = signInWithPassword for login
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
        email,
        password,
        returnSecureToken: true
    });
}

export async function createUser(email, password) {
    authenticate("signUp", email, password);
}

export async function login(email, password) {
    authenticate("signInWithPassword", email, password);
}
