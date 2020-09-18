import React from 'react';
import FormMain from '../*/Form/FormMain';
import Form from '../*/Form';
import { login } from '../../utils/api/authentication';


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

    function onSubmit(e, { email, password }) {
        login(email, password);
    }

    return (
        <FormMain heading='Log into your account' data={{ email: '', password: '' }} onSubmit={onSubmit} validation={validation}>

            <Form.Field label='Email Address' name='email'>
                <input name='email' id="email" type="email" placeholder="you@example.com" />
            </Form.Field>

            <Form.Field groupClass='ma-bt-md' label='Password' name='password'>
                <input name='password' id="password" type="password" placeholder="********" />
            </Form.Field>
            <Form.Button>Login</Form.Button>
        </FormMain>
    )
}
