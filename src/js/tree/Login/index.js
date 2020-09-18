import React from 'react';
import FormMain from '../*/Form/FormMain';
import Form from '../*/Form/Form';
import { login } from '../../utils/api/authentication';
import { useHistory, useLocation } from 'react-router-dom';

export default function Login() {

    const history = useHistory();
    const location = useLocation();

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

    async function onSubmit(e, { email, password }) {
        await login(email, password);

        const { from } = location.state || { from: '/' };

        history.replace(from);
    }

    return (
        <FormMain heading='Log into your account' data={{ email: '', password: '' }} onSubmit={onSubmit} validation={validation}>

            <Form.Group>
                <Form.Field label='Email Address' name='email'>
                    <Form.Input type="email" placeholder="you@example.com" />
                </Form.Field>
            </Form.Group>

            <Form.Group extraClass='ma-bt-md'>
                <Form.Field label='Password' name='password'>
                    <Form.Input type="password" placeholder="********" />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Button>Login</Form.Button>
            </Form.Group>
        </FormMain>
    )
}

/*

*/