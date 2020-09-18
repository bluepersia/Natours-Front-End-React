import { getUserUrl } from './url';
import request from '../request';

async function getMe() {
    const response = await request(getUserUrl('me'), 'GET');

    if (response.status)
        return response.data.data.user;

    return null;
}


export { getMe }