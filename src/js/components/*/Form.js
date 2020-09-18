import React from 'react';
import useForm from '../../hooks/useForm';
import replaceAllChildren from '../../utils/replaceAllChildren';

export default function Form({ data = {}, onSubmit, children, ...restProps }) {
    const [input, handleInputChange, handleFormSubmit] = useForm(data, onSubmit);

    const newChildren = replaceAllChildren(children, ({ type, props }) => {

        const nextProps = { ...props };

        const currentVal = input[props.name];


        if (type == 'input' || type == 'textarea' || type == 'select') {


            const valKey = nextProps.type == 'checkbox' || nextProps.type == 'radio' ? 'checked' : 'value';

            nextProps[valKey] = nextProps.type == 'radio' ? currentVal == nextProps.value : currentVal;

            nextProps.onChange = handleInputChange;

        }
        else if (nextProps.isValidator)
            nextProps.value = currentVal;



        return nextProps;
    });


    return (
        <form onSubmit={handleFormSubmit} {...restProps}>
            {newChildren}
        </form>
    )
}


Form.Field = function ({ id, label, children }) {
    return (
        <div className='form-group'>
            <label className='form__label' for={id}>{label}</label>
            {children}
        </div>
    )
}