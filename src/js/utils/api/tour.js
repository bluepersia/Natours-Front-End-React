import { getApiUrl } from './url';
import request from '../request';

function toursUrl(route = '') {
    return `${getApiUrl('tours')}${route}`;
}

async function getAllTours() {

    const response = await request(toursUrl());;

    if (response.data)
        return response.data.data.tours;
}



export { getAllTours };