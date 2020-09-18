import React from 'react';
import useForm from '../../../hooks/useForm';
import replaceAllChildren from '../../../utils/replaceAllChildren';
import ValidationField from './ValidationField';


export default function Form({ data = {}, onSubmit, children, validation = {}, ...restProps }) {
    const [input, handleInputChange, handleFormSubmit] = useForm(data, onSubmit);

    const newChildren = replaceAllChildren(children, ({ type, props }) => {

        let nextProps = { ...props };

        if (type == 'input' || type == 'textarea' || type == 'select') {

            const currentVal = input[props.name];

            const valKey = nextProps.type == 'checkbox' || nextProps.type == 'radio' ? 'checked' : 'value';

            nextProps[valKey] = nextProps.type == 'radio' ? currentVal == nextProps.value : currentVal;

            nextProps.onChange = handleInputChange;

            const validate = validation[props.name];
            if (validate)
                nextProps = { ...nextProps, ...validate };


        }
        else if (props.hasOwnProperty('validation') && props.hasOwnProperty('name')) {

            if (validation)
                nextProps.validation = validation[props.name];


            nextProps.allValues = input;
        }



        return nextProps;
    });


    return (
        <form onSubmit={handleFormSubmit} {...restProps}>
            {newChildren}
        </form>
    )
}


Form.Field = function ({ extraClass = '', label, children, name, htmlFor }) {
    return (
        <div className={`form-group ${extraClass}`}>
            <label className='form__label' htmlFor={htmlFor}>{label}</label>
            {children}
            <Form.ValidationMsg name={name} validation={null} />
        </div>
    )
}


Form.ValidationMsg = function (props) {
    return <ValidationField {...props} render={msg => (

        <p>{msg}</p>

    )} />;
}
