import React from 'React';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './components/pages/Overview';
import Tour from './components/pages/Tour';


function App() {
    return (
        <Router>
            <header className="header">
                <nav className="nav nav--tours">
                    <a href="#" className="nav__el">All tours</a>
                    <form className="nav__search">
                        <button className="nav__search-btn">
                            <svg>
                                <use xlinkHref="img/icons.svg#icon-search"></use>
                            </svg>
                        </button>
                        <input
                            type="text"
                            placeholder="Search tours"
                            className="nav__search-input"
                        />
                    </form>
                </nav>
                <div className="header__logo">
                    <img src="img/logo-white.png" alt="Natours logo" />
                </div>
                <nav className="nav nav--user">
                    <a href="#" className="nav__el">My bookings</a>
                    <a href="#" className="nav__el">
                        <img src="img/user.jpg" alt="User photo" className="nav__user-img" />
                        <span>Jonas</span>
                    </a>

                </nav>
            </header>

            <Switch>
                <Route path='/tour/:id'><Tour /></Route>
                <Route path='/'><Overview /></Route>
            </Switch>

            <div className="footer">
                <div className="footer__logo">
                    <img src="img/logo-green.png" alt="Natours logo" />
                </div>
                <ul className="footer__nav">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Download apps</a></li>
                    <li><a href="#">Become a guide</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <p className="footer__copyright">
                    &copy; by Jonas Schmedtmann. All rights reserved.
      </p>
            </div>

        </Router>
    )
}


export default App;