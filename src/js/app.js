import React from 'React';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import Overview from './tree/Overview';
import Tour from './tree/Tour';
import Login from './tree/Login';
import Alert from './tree/*/Alert';
import Account from './tree/Account';
import { GlobalContextProvider, GlobalContextConsumer } from './tree/*/contexts/GlobalContext';
import { getUserImageUrl } from './utils/api/url';
import { logout } from './utils/api/authentication';
import ProtectedRoute from './tree/*/Protected';


function App() {


    const location = useLocation();


    return (

        <GlobalContextProvider>
            <Alert />
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
                    <GlobalContextConsumer>
                        {({ user }) => user ? (
                            <>
                                <a href="#" className="nav__el">My bookings</a>
                                <Link to="/account/settings" className="nav__el">
                                    <img src={getUserImageUrl(user.photo)} alt="User photo" className="nav__user-img" />
                                    <span>{user.name}</span>
                                </Link>
                                <button className='nav__el' onClick={logout}>Log out</button>
                            </>
                        ) : <>
                                <Link className="nav__el" to={{ pathname: "/login", state: { from: location } }}>Log in</Link>
                                <Link className="nav__el nav__el--cta" to="/account/settings">Sign up</Link>
                            </>
                        }
                    </GlobalContextConsumer>
                </nav>

            </header>

            <Switch>
                <Route path='/tour/:id'><Tour /></Route>

                <main className='main'>
                    <Switch>
                        <Route path='/login'><Login /></Route>
                        <ProtectedRoute path='/account'><Account /></ProtectedRoute>
                        <Route path='/'><Overview /></Route>
                    </Switch>
                </main>
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

        </GlobalContextProvider >

    )
}




export default App;