import React from 'react';

import { useParams } from 'react-router-dom';

import { getTourImageUrl, getApiUrl, getUserImageUrl } from '../../utils/api/url';
import getIcon from '../../utils/getIcon';

import { getReadable } from '../../utils/date';
import capitalize from '../../utils/capitalize';

import DataFetcher from '../*/DataFetcher';

export default function TourPage() {

    const { id } = useParams();


    return (
        <DataFetcher url={getApiUrl(`tours/${id}?populate=guides[photo|role|name],reviews[user|review|rating].user[photo|name]`)}>
            {data => data && <Tour {...data.data.tour} />}
        </DataFetcher>
    )
}

function Tour({ name, imageCover, duration, startDates, difficulty, maxGroupSize, ratingsAverage, startLocation, guides, description, images, reviews }) {

    imageCover = getTourImageUrl(imageCover);


    return (
        <>
            <section className="section-header">
                <div className="header__hero">
                    <div className="header__hero-overlay">&nbsp;</div><img className="header__hero-img" src={imageCover} alt={name} /></div>
                <div className="heading-box">
                    <h1 className="heading-primary"><span>{name}</span></h1>
                    <div className="heading-box__group">
                        <HeadingBoxDetail icon='clock' text={`${duration} days`} />
                        <HeadingBoxDetail icon='map-pin' text={startLocation.description} />
                    </div>
                </div>
            </section >
            <section className="section-description">
                <div className="overview-box">
                    <div>
                        <OverviewBoxGroup heading='Quick facts'>
                            <OverviewBoxDetail icon='calendar' label='Next date' value={getReadable(new Date(startDates[0].date))} />
                            <OverviewBoxDetail icon='trending-up' label='Difficulty' value={capitalize(difficulty)} />
                            <OverviewBoxDetail icon='user' label='Participants' value={`${maxGroupSize} people`} />
                            <OverviewBoxDetail icon='star' label='Rating' value={`${ratingsAverage} / 5`} />
                        </OverviewBoxGroup>
                        <OverviewBoxGroup heading='Your tour guides'>
                            {guides.map(({ photo, role, name }, index) => <OverviewBoxDetailGuide key={index} img={photo} role={role} name={name} />)}
                        </OverviewBoxGroup>
                    </div >
                </div >
                <div className="description-box">
                    <h2 className="heading-secondary ma-bt-lg">About {name} tour</h2>
                    {description.split('\n').map((paragraph, index) => <p key={index} className="description__text">{paragraph}</p>)}
                </div>
            </section >
            <section className="section-pictures">
                {images.map((img, index) => <div key={index} className="picture-box"><img className={`picture-box__img picture-box__img--${index + 1}`} src={getTourImageUrl(img)} alt={`${name} 1`} /></div>)}
            </section>
            <section className="section-map">
                <div id="map"></div>
            </section>
            <section className="section-reviews">
                <div className="reviews">
                    {reviews.map(({ user: { name, photo }, review, rating }, index) => (
                        <div key={index} className="reviews__card">
                            <div className="reviews__avatar"><img className="reviews__avatar-img" src={getUserImageUrl(photo)} alt={name} />
                                <h6 className="reviews__user">{name}</h6>
                            </div>
                            <p className="reviews__text">{review}</p>
                            <div className="reviews__rating">
                                {[1, 2, 3, 4, 5].map(star => <svg key={star} className={`reviews__star reviews__star--${rating >= star ? 'active' : 'inactive'}`}><use xlinkHref={getIcon('star')}></use></svg>)}
                            </div >
                        </div >
                    ))}
                </div >
            </section >
            <section className="section-cta">
                <div className="cta">
                    <div className="cta__img cta__img--logo"><img src="/img/logo-white.png" alt="Natours logo" /></div><img className="cta__img cta__img--1" src={getTourImageUrl(images[1])} alt="" /><img className="cta__img cta__img--2" src={getTourImageUrl(images[0])} alt="" />
                    <div className="cta__content">
                        <h2 className="heading-secondary">What are you waiting for?</h2>
                        <p className="cta__text">{duration} days. 1 adventure. Infinite memories. Make it yours today!</p><a className="btn btn--green span-all-rows" href="/login">Login to book tour</a></div>
                </div>
            </section>
        </>
    )
}

function HeadingBoxDetail({ text, icon }) {
    return <div className="heading-box__detail"><svg className="heading-box__icon"><use xlinkHref={getIcon(icon)}></use></svg><span className="heading-box__text">{text}</span></div>;
}


function OverviewBoxGroup({ heading, children }) {
    return <div className="overview-box__group">
        <h2 className="heading-secondary ma-bt-lg">{heading}</h2>
        {children}
    </div>
}


function OverviewBoxDetail({ icon, text, value }) {
    return <div className="overview-box__detail"><svg className="overview-box__icon"><use xlinkHref={getIcon(icon)}></use></svg><span className="overview-box__label">{text}</span><span className="overview-box__text">{value}</span></div>
}


function OverviewBoxDetailGuide({ img, role, name }) {
    const roleToStr = capitalize(role).replace('-', ' ');


    return <div className="overview-box__detail"><img className="overview-box__img" src={getUserImageUrl(img)} alt={roleToStr} /><span className="overview-box__label">{roleToStr}</span><span className="overview-box__text">{name}</span></div>

}

