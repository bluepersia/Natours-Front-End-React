import React from 'react';
import Form from './Form';

export default function FormMain({ heading, children, ...restProps }) {
    return (
        <div className="login-form">
            <h2 className="heading-secondary ma-bt-lg">{heading}</h2>
            <Form className='form' {...restProps}>
                {children}
            </Form>
        </div>
    )
}