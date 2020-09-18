import React from 'react';
import { getTourImageUrl, getIconUrl } from '../utils/url';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { monthName } from '../utils/date';



export default function ToursList({ tours = [] }) {

    return tours.map(tour => <Tour key={tour.id} {...tour} />);
}




function Tour({ name, imageCover, difficulty, duration, summary, startLocation, startDates, locations, maxGroupSize, price, ratingsAverage, ratingsQuantity, slug }) {

    imageCover = getTourImageUrl(imageCover);


    const startDate = new Date(startDates[0].date);

    return (
        <div className="card">
            <div className="card__header">
                <div className="card__picture">
                    <div className="card__picture-overlay">&nbsp;</div>
                    <img
                        src={imageCover}
                        alt={name}
                        className="card__picture-img"
                    />
                </div>

                <h3 className="heading-tertirary">
                    <span>{name}</span>
                </h3>
            </div>

            <div className="card__details">
                <h4 className="card__sub-heading">{difficulty} {duration}-day tour</h4>
                <p className="card__text">
                    {summary}
                </p>
                <CardData icon='map-pin' text={startLocation.description} />
                <CardData icon='calendar' text={`${monthName(startDate.getMonth())} ${startDate.getFullYear()}`} />
                <CardData icon='flag' text={`${locations.length} stops`} />
                <CardData icon='user' text={`${maxGroupSize} people`} />
            </div >

            <div className="card__footer">
                <FooterParagraph value={`$${price}`} text='per person' />
                <FooterParagraph value={ratingsAverage} text={`rating (${ratingsQuantity})`} />
                <Link to={`/tour/${slug}`} className="btn btn--green btn--small">Details</Link>
            </div>
        </div >
    )
}

Tour.propTypes = {
    name: PropTypes.string.isRequired,
    imageCover: PropTypes.string,
    difficulty: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    startLocation: PropTypes.object.isRequired,
    startDates: PropTypes.arrayOf(PropTypes.object).isRequired,
    locations: PropTypes.arrayOf(PropTypes.object).isRequired,
    maxGroupSize: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    ratingsAverage: PropTypes.number.isRequired,
    ratingsQuantity: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}



function CardData({ icon, text }) {
    return <div className="card__data">
        <svg className="card__icon">
            <use xlinkHref={getIconUrl(icon)}></use>
        </svg>
        <span>{text}</span>
    </div>;
}


function FooterParagraph({ value, text }) {
    return <p>
        <span className="card__footer-value">{value}</span>
        <span className="card__footer-text"> {text}</span>
    </p>
}