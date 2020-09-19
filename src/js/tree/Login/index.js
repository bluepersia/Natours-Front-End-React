import React from 'react';
import FormMain from '../*/Form/FormMain';
import { login } from '../../utils/api/authentication';
import { useHistory, useLocation } from 'react-router-dom';

const { Form } = FormMain;
const { Validation } = Form;

export default function Login() {

    const history = useHistory();
    const location = useLocation();

    const validation = {
        email: [Validation.IsRequired, Validation.IsEmail],
        password: [Validation.IsRequired, Validation.MinLength(8)]
    }

    async function onSubmit(e, { email, password }) {
        const response = await login(email, password);

        if (response.status) {

            const { from } = location.state || { from: '/' };

            history.replace(from);

        }
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