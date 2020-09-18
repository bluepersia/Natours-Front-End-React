import { getUserUrl } from './url';
import request from '../request';

async function login(email, password) {
    const response = await request(getUserUrl('login'), 'POST', { email, password });

    if (response.status)
        document.dispatchEvent(new Event('loggedIn'));
}


export { login }