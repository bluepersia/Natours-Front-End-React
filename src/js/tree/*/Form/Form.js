import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = Form.FormContext = createContext();
const { Provider, Consumer } = FormContext;

export function FormProvider({ defaultValues = {}, validation = {}, children }) {
    const [input, setInput] = useState(defaultValues);


    return <Provider value={{ input, setInput, validation }}>{children(input)}</Provider>
}

export default function Form({ defaultValues = {}, validation = {}, onSubmit, children, ...restProps }) {

    function handleSubmit(e, values) {
        if (onSubmit) {
            e.preventDefault();
            onSubmit(e, values);
        }
    }
    return <FormProvider defaultValues={defaultValues} validation={validation}>{input => <form onSubmit={e => handleSubmit(e, input)} {...restProps}>{children}</form>}</FormProvider>
}


function useInput(name) {
    const { input, setInput, validation } = useContext(FormContext);

    function handleInputChange({ target: { name, type, checked, value } }) {
        if (type == 'checkbox')
            value = checked;

        setInput(prevInput => ({ ...prevInput, [name]: value }));
    }

    const validators = validation[name];

    return [input[name], validators ? validators.reduce((acc, { inputProps }) => inputProps ? ({ ...acc, ...inputProps }) : acc, {}) : {}, handleInputChange];
}


Form.Input = function ({ type = 'text', name, value, ...restProps }) {
    const [inputValue, validationProps, handleInputChange] = useInput(name);


    return <Form.InputContextConsumer name={name}>
        {type == 'checkbox' ?
            <input type='checkbox' checked={inputValue} onChange={handleInputChange} {...restProps} {...validationProps}></input>
            : type == 'radio' ?
                <input type='radio' checked={inputValue == value} value={value} onChange={handleInputChange} {...restProps}  {...validationProps} />
                :
                <input type={type} value={inputValue} onChange={handleInputChange} {...restProps}  {...validationProps} />}</Form.InputContextConsumer>


}

Form.Select = function ({ children, name, ...restProps }) {
    const [inputValue, validationProps, handleInputChange] = useInput(name);

    return <Form.InputContextConsumer name={name}><select {...restProps} value={inputValue} onChange={handleInputChange}  {...validationProps}>{children}</select></Form.InputContextConsumer>
}

Form.TextArea = function ({ name, ...restProps }) {
    const [inputValue, validationProps, handleInputChange] = useInput(name);

    return <Form.InputContextConsumer name={name}><textarea {...restProps} value={inputValue} onChange={handleInputChange}  {...validationProps} /></Form.InputContextConsumer>;
}


Form.useValidation = function (name) {

    name = name || useContext(InputContext);

    const { input, validation } = useContext(FormContext);
    const val = input[name];
    const validators = validation[name];

    const [touched, setTouched] = useState(false);

    const [err, setErr] = useState(['']);

    useEffect(() => {
        setTouched(true);

        if (touched) {
            setErr(validate());
        }

    }, [input[name]]);

    function validate() {

        if (!validators)
            return '';

        for (const validator of validators) {
            const msg = validator.call(input, val);

            if (msg)
                return msg;
        }

        return '';
    }

    return err;
}


const InputContext = Form.InputContext = createContext();

Form.InputContextProvider = function ({ name, children }) {
    return <InputContext.Provider value={name}>{children}</InputContext.Provider>
}


Form.InputContextConsumer = function ({ name, children }) {
    name = name || useContext(InputContext);

    return React.Children.map(children, child => React.cloneElement(child, ({ ...child.props, name })));
}


Form.InputContextConsumerSecondary = function ({ name, children }) {
    name = name || useContext(InputContext);

    return children(name);
}











