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

            <Form.Field label='Email Address' name='email' validation={null} allValues={{}}>
                <input name='email' id="email" type="email" placeholder="you@example.com" />
            </Form.Field>

            <Form.Field extraClass='ma-bt-md' label='Password' name='password' validation={null} allValues={{}}>
                <input name='password' id="password" type="password" placeholder="********" />
            </Form.Field>
            <div className="form__group"><button className="btn btn--green">Login</button></div>
        </FormMain>
    )
}
