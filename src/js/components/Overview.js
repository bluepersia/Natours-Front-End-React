import React, { useEffect, useState } from 'react';
import ToursList from './ToursList';
import { getAllTours } from '../utils/api/tour';


export default function Overview() {

    const [tours, setTours] = useState([]);


    useEffect(() => {

        async function fetchData() {
            const tours = await getAllTours();

            setTours(tours);
        }

        fetchData();
    }, []);
    return (
        <main class='main'>
            <div className="card-container">
                <ToursList tours={tours} />
            </div>
        </main>
    )
}