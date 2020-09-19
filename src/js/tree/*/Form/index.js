import React from 'react';
import FormBase from './Form';
import * as validator from './validation/validator';


export default function Form({ children, ...props }) {
    return <FormBase {...props}>{children}</FormBase>;
}

Form.Base = FormBase;


Form.Validation = validator;

Form.Group = function ({ extraClass = '', children, ...restProps }) {
    return <div className={`form-group ${extraClass}`} {...restProps}>
        {children}
    </div>
}

Form.Field = function ({ label, children, name }) {


    return (
        <FormBase.InputContextProvider name={name}>
            <Form.Label>
                {label}
                {children}
            </Form.Label>
            <Form.ValidationMsg />
        </FormBase.InputContextProvider>

    )
}

Form.Input = function ({ ...props }) {
    return <FormBase.Input className='form__input' {...props} />
}

Form.TextArea = function ({ ...props }) {
    return <FormBase.TextArea className='form__input' {...props} />
}

Form.Select = function ({ ...props }) {
    return <FormBase.Select className='form__input' {...props} />
}


Form.Label = function ({ children, ...restProps }) {
    return <label className='form__label' {...restProps}>{children}</label>
}


Form.ValidationMsg = function ({ name }) {

    const errMsg = FormBase.useValidation(name);

    return <h2 className='red'>{errMsg}</h2>;

}



Form.Button = function ({ btnClass = '', children, ...restProps }) {
    return <button className={`btn btn--green ${btnClass}`} {...restProps}>{children}</button>;
}
