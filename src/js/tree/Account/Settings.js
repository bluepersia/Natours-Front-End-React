import React from 'react';

export default function Settings() {
    return (
        <>
            <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
                <form className="form form-user-data">
                    <div className="form__group"><label className="form__label" for="name">Name</label><input className="form__input" id="name" type="text" value="Jonas Schmedtmann" required="required" /></div>
                    <div className="form__group ma-bt-md"><label className="form__label" for="email">Email address</label><input className="form__input" id="email" type="email" value="admin@natours.io" required="required" /></div>
                    <div className="form__group form__photo-upload"><img className="form__user-photo" src="img/user.jpg" alt="User photo" /><a className="btn-text" href="">Choose new photo</a></div>
                    <div className="form__group right"><button className="btn btn--small btn--green">Save settings</button></div>
                </form>
            </div>
            <div className="line">&nbsp;</div>
            <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">Password change</h2>
                <form className="form form-user-settings">
                    <div className="form__group"><label className="form__label" for="password-current">Current password</label><input className="form__input" id="password-current" type="password" placeholder="••••••••" required="required" minlength="8" /></div>
                    <div className="form__group"><label className="form__label" for="password">New password</label><input className="form__input" id="password" type="password" placeholder="••••••••" required="required" minlength="8" /></div>
                    <div className="form__group ma-bt-lg"><label className="form__label" for="password-confirm">Confirm password</label><input className="form__input" id="password-confirm" type="password" placeholder="••••••••" required="required" minlength="8" /></div>
                    <div className="form__group right"><button className="btn btn--small btn--green">Save password</button></div>
                </form>
            </div>
        </>
    )
}