import React from 'react';
import dataFetcher from './useDataFetcher';


export default function DataFetcher({ url = '', children }) {
    const [{ isLoading, response, error }, setUrl] = dataFetcher(url);


    return (
        <>
            {isLoading ? <Loader /> : error ? <ErrorHeading err={error} /> : children(response && response.data)}
        </>
    )
}


function ErrorHeading({ err }) {

    return <h1 className="heading-secondary--error">{err.response ? err.response.data.message : 'Something went wrong!'}</h1>
}

function Loader() {
    return (
        <div className="loader">
            <svg>
                <use href="/img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    )
}