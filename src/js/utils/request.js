import axios from 'axios';

export default async function (url, method = 'GET', data = {}, noEvent = false) {
    try {

        const headers = {};

        if (window.authorizationToken)
            headers.authorization = `Bearer ${window.authorizationToken}`;

        const response = await axios({ method, url, data, headers });

        if (!noEvent)
            document.dispatchEvent(new CustomEvent('requestSuccess', { detail: response }));

        return response;
    }
    catch (err) {

        if (!noEvent)
            document.dispatchEvent(new CustomEvent('requestFail', { detail: err }));

        return err;
    }
}