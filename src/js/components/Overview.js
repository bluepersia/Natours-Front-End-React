import React, { useEffect, useState } from 'react';
import ToursList from './ToursList';
import dataFetcher from '../hooks/dataFetcher';
import { getApiUrl } from '../utils/url';


export default function Overview() {

    const [{ isLoading, response, error }, setUrl] = dataFetcher(getApiUrl('tours'));

    const tours = response && response.data.data.tours || [];

    return (
        <main className='main'>
            <div className="card-container">
                {isLoading ? <h1>Loading...</h1> : <ToursList tours={tours} />}
            </div>
        </main>
    )
}