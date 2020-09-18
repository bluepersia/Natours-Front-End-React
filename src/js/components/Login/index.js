import React from 'react';
import FormMain from '../*/Form/FormMain';
import Form from '../*/Form/Form';


export default function Login() {

    const validation = {
        email: {
            required: true,
            email: ''
        },
        password: {
            required: true,
            minLength: 8
        }
    }

    return (
        <FormMain heading='Log into your account' data={{ email: '', password: '' }} onSubmit={() => console.log('Submitted')} validation={validation}>
            <div className="form__group"><label className="form__label" htmlFor="email">Email address</label><input name='email' className="form__input" id="email" type="email" placeholder="you@example.com" /></div>
            <Form.ValidationMsg name='email' />
            <div className="form__group ma-bt-md"><label className="form__label" htmlFor="password">Password</label><input name='password' className="form__input" id="password" type="password" placeholder="••••••••" /></div>
            <div className="form__group"><button className="btn btn--green">Login</button></div>
        </FormMain>
    )
}
