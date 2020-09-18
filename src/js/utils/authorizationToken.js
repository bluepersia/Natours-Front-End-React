
window.authorizationToken = localStorage.getItem('authorizationToken');

export default function setAuthorizationToken(token) {
    window.authorizationToken = token;

    localStorage.setItem('authorizationToken', token);
}

