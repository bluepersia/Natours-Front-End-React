import React, { createContext } from 'react';
import useForm from '../../../hooks/useForm';
import replaceAllChildren from '../../../utils/replaceAllChildren';
import ValidationField from './ValidationField';
import validationTranslator from './validationTranslator';


export default function Form({ data = {}, onSubmit, children, validation = {}, ...restProps }) {
    const [input, handleInputChange, handleFormSubmit] = useForm(data, onSubmit);

    const newChildren = replaceAllChildren(children, ({ type, props }) => {

        let nextProps = { ...props };


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
            else {
                if (props.hasOwnProperty('value'))
                    nextProps.value = currentVal;

                if (props.hasOwnProperty('validation') && thisValidate)
                    nextProps.validation = thisValidate;


            }
        }


        if (props.hasOwnProperty('allValues'))
            nextProps.allValues = input;





        return nextProps;
    });


    return (
        <form onSubmit={handleFormSubmit} {...restProps}>
            {newChildren}
        </form>
    )
}


Form.Field = function ({ extraClass = '', label, children, name, validation = null, allValues = {} }) {

    children = React.Children.map(children, child => React.cloneElement(child, ({ ...child.props, className: 'form__input' })));

    return (
        <div className={`form-group ${extraClass}`}>
            <label className='form__label' htmlFor={name}>{label}</label>
            {children}
            <Form.ValidationMsg name={name} validation={validation} allValues={allValues} />
        </div>
    )
}


Form.ValidationMsg = function ({ name, validation, allValues = {} }) {
    return <ValidationField name={name} validation={validation} allValues={allValues} render={msg => (

        <h2 className='red'>{validationTranslator(msg, name, validation[msg])}</h2>

    )} />;
}
