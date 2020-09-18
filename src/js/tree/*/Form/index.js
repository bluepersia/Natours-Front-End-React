import React, { createContext } from 'react';
import useForm from './useForm';
import replaceAllChildren from '../../../utils/replaceAllChildren';
import ValidationField from './ValidationField';
import validationTranslator from './validationTranslator';


export default function Form({ data = {}, onSubmit, children, validation = {}, ...restProps }) {
    const [input, handleInputChange, handleFormSubmit] = useForm(data, onSubmit);

    const newChildren = replaceAllChildren(children, ({ type, props }) => {

        let nextProps = { ...props };

        const isComponent = typeof type == 'function'

        if (props.hasOwnProperty('name')) {

            const { name } = props;

            const currentVal = input[name];
            const thisValidate = validation[name];

            if (type == 'input' || type == 'textarea' || type == 'select') {

                const valKey = nextProps.type == 'checkbox' || nextProps.type == 'radio' ? 'checked' : 'value';

                nextProps[valKey] = nextProps.type == 'radio' ? currentVal == nextProps.value : currentVal;

                nextProps.onChange = handleInputChange;

                if (thisValidate)
                    nextProps = { ...nextProps, ...thisValidate };


            }
            else if (isComponent) {

                nextProps.value = currentVal;

                if (thisValidate)
                    nextProps.validation = thisValidate;


            }


        }


        if (isComponent)
            nextProps.allValues = input;







        return nextProps;
    });


    return (
        <form onSubmit={handleFormSubmit} {...restProps}>
            {newChildren}
        </form>
    )
}

Form.Group = function ({ extraClass = '', children, ...restProps }) {
    return <div className={`form-group ${extraClass}`} {...restProps}>
        {children}
    </div>
}

Form.Field = function ({ label, children, name, validation = null, allValues = {} }) {

    children = React.Children.map(children, child => React.cloneElement(child, ({ ...child.props, name, className: 'form__input' })));

    return (
        <>
            <Form.Label>
                {label}
                {children}
            </Form.Label>
            <Form.ValidationMsg name={name} validation={validation} allValues={allValues} />
        </>

    )
}


Form.Label = function ({ children, ...restProps }) {
    return <label className='form__label' {...restProps}>{children}</label>
}


Form.ValidationMsg = function ({ name, validation, allValues = {} }) {
    return <ValidationField name={name} validation={validation} allValues={allValues} render={msg => (

        <h2 className='red'>{validationTranslator(msg, name, validation[msg])}</h2>

    )} />;
}



Form.Button = function ({ btnClass = '', children, ...restProps }) {
    return <button className={`btn btn--green ${btnClass}`} {...restProps}>{children}</button>;
}
