import React from 'react';
import dataFetcher from '../hooks/dataFetcher';
import Loader from './Loader';
import ErrorHeading from './ErrorHeading';


export default function DataFetcher({ url = '', render = () => { } }) {
    const [{ isLoading, response, error }, setUrl] = dataFetcher(url);


    return (
        <>
            {isLoading ? <Loader /> : error ? <ErrorHeading err={error} /> : render(response && response.data)}
        </>
    )
}