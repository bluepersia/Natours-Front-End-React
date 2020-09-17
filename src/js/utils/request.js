import axios from 'axios';

export default async function (url, method = 'GET', data = {}) {
    try {
        const response = await axios({ method, url, data });

        document.dispatchEvent(new CustomEvent('requestSuccess', { detail: response }));

        return response;
    }
    catch (err) {

        document.dispatchEvent(new CustomEvent('requestFail', { detail: err }));

        return err;
    }
}