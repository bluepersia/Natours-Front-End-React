import React from 'react';
import Form from './Form';

export default function FormMain({ heading, data = {}, onSubmit, children }) {
    return (
        <div className="login-form">
            <h2 className="heading-secondary ma-bt-lg">{heading}</h2>
            <Form className='form' data={data} onSubmit={onSubmit}>
                {children}
            </Form>
        </div>
    )
}