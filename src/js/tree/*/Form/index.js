import React from 'react';
import validationTranslator from './validationTranslator';
import validate from './validation';
import Form from './Form';


export default Form;

Form.Group = function ({ extraClass = '', children, ...restProps }) {
    return <div className={`form-group ${extraClass}`} {...restProps}>
        {children}
    </div>
}

Form.Field = function ({ label, children, name }) {

    children = React.Children.map(children, child => React.cloneElement(child, ({ ...child.props, name, className: 'form__input' })));

    return (
        <>
            <Form.Label>
                {label}
                {children}
            </Form.Label>
            <Form.ValidationMsg name={name} />
        </>

    )
}


Form.Label = function ({ children, ...restProps }) {
    return <label className='form__label' {...restProps}>{children}</label>
}


Form.ValidationMsg = function ({ name }) {

    const [errKey, val, setting] = Form.useValidation(name, validate);

    return <h2 className='red'>{validationTranslator(errKey, name, setting)}</h2>

}



Form.Button = function ({ btnClass = '', children, ...restProps }) {
    return <button className={`btn btn--green ${btnClass}`} {...restProps}>{children}</button>;
}
