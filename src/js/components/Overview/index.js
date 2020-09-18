import React, { useEffect, useState } from 'react';
import ToursList from '../*/ToursList';
import DataFetcher from '../*/DataFetcher';
import { getApiUrl } from '../../utils/api/url';


export default function Overview() {


    return (
        <DataFetcher url={getApiUrl('tours')} render={data => (
            <main className='main'>
                <div className="card-container">
                    {data && <ToursList tours={data.data.tours} />}
                </div>
            </main>
        )} />
    )
}