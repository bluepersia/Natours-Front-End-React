import { useReducer, useState, useEffect } from 'react';
import request from '../../../utils/request';


export default function dataFetcher(defaultUrl = '') {
    const [state, dispatch] = useReducer((state, { type, payload }) => {

        switch (type) {
            case 'LOADING':
                return { ...state, isLoading: true, response: null, error: null }
                break;

            case 'RESPONSE':
                return { ...state, isLoading: false, response: payload, error: null }
                break;

            case 'ERROR':
                return { ...state, isLoading: false, response: null, error: payload }
                break;

            default:
                return { ...state }
                break;
        }

    },
        {
            isLoading: false,
            response: null,
            error: null
        })


    const [url, setUrl] = useState(defaultUrl);


    useEffect(() => {
        let isCurrent = true;


        async function fetchData() {
            dispatch({ type: "LOADING" });
            const response = await request(url, 'GET');

            if (isCurrent && response.status)
                dispatch({ type: "RESPONSE", payload: response });
            else
                dispatch({ type: "ERROR", payload: response });

        }

        fetchData();
        return () => isCurrent = false;
    }, [url]);

    return [state, setUrl];
}