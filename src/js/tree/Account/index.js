import React from 'react';
import { BrowserRouter as Router, useRouteMatch, Route, Switch } from 'react-router-dom';
import Settings from './Settings';

export default function Account() {

    const { url, path } = useRouteMatch();

    return (
        <div className="user-view">
            <nav className="user-view__menu">
                <ul className="side-nav">
                    <li className="side-nav--active"><a href="#"><svg><use xlinkHref="img/icons.svg#icon-settings"></use></svg>Settings</a></li>
                    <li><a href="#"><svg><use xlinkHref="img/icons.svg#icon-briefcase"></use></svg>My bookings</a></li>
                    <li><a href="#"><svg><use xlinkHref="img/icons.svg#icon-star"></use></svg>My reviews</a></li>
                    <li><a href="#"><svg><use xlinkHref="img/icons.svg#icon-credit-card"></use></svg>Billing</a></li >
                </ul >
                <div className="admin-nav">
                    <h5 className="admin-nav__heading">Admin</h5>
                    <ul className="side-nav">
                        <li><a href="#"><svg><use xlinkHref="img/icons.svg#icon-map"></use></svg>Manage tours</a></li>
                        <li><a href="#"><svg><use xlinkHref="img/icons.svg#icon-users"></use></svg>Manage users</a></li>
                        <li><a href="#"><svg><use xlinkHref="img/icons.svg#icon-star"></use></svg>Manage reviews</a></li >
                        <li><a href="#"><svg><use xlinkHref="img/icons.svg#icon-briefcase"></use></svg></a></li >
                    </ul >
                </div >
            </nav >
            <div className="user-view__content">
                <Switch>
                    <Route path={`${path}/settings`}><Settings /></Route>
                </Switch>
            </div>
        </div >
    )
}


