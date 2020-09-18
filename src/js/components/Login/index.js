import React from 'react';
import FormMain from '../*/FormMain';

export default function Login() {

    return (
        <FormMain heading='Log into your account' data={{ email: '', password: '' }} onSubmit={() => console.log('Submitted')}>
            <div className="form__group"><label className="form__label" htmlFor="email">Email address</label><input name='email' className="form__input" id="email" type="email" placeholder="you@example.com" required="required" /></div>
            <div className="form__group ma-bt-md"><label className="form__label" htmlFor="password">Password</label><input name='password' className="form__input" id="password" type="password" placeholder="••••••••" required="required" minLength="8" /></div>
            <div className="form__group"><button className="btn btn--green">Login</button></div>
        </FormMain>
    )
}
