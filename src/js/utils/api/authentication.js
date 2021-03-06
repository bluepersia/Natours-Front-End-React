import { getUserUrl } from './url';
import request from '../request';

async function login(email, password) {
    const response = await request(getUserUrl('login'), 'POST', { email, password });

    if (response.status)
        document.dispatchEvent(new Event('loggedIn'));

    return response;
}

async function logout() {
    const response = await request(getUserUrl('logout'), 'GET');

    if (response.status)
        document.dispatchEvent(new Event('loggedOut'));
}


export { login, logout }