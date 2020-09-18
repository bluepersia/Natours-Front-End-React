import React, { createContext, useContext, useState } from 'react';

export const FormContext = createContext();
const { Provider, Consumer } = FormContext;

export function FormProvider({ defaultValues = {}, validation = {}, children }) {
    const [input, setInput] = useState(defaultValues);


    return <Provider value={{ input, setInput, validation }}>{children(input)}</Provider>
}

export default function Form({ defaultValues = {}, validation = {}, onSubmit, children, ...restProps }) {

    return <FormProvider defaultValues={defaultValues} validation={validation}>{input => <form onSubmit={e => onSubmit(e, input)} {...restProps}>{children}</form>}</FormProvider>
}


function useInput(name) {
    const { input, setInput, validation } = useContext(FormContext);

    function handleInputChange({ target: { name, type, checked, value } }) {
        if (type == 'checkbox')
            value = checked;

        setInput(prevInput => ({ ...prevInput, [name]: value }));
    }

    return [input[name], validation[name], handleInputChange];
}


Form.Input = function ({ type = 'text', name, value, ...restProps }) {
    const [inputValue, validation, handleInputChange] = useInput();

    if (type == 'checkbox')
        return <input type='checkbox' name={name} checked={inputValue} onChange={handleInputChange} {...restProps} {...validation}></input>
    else if (type == 'radio')
        return <input type='radio' name={name} checked={inputValue == value} value={value} onChange={handleInputChange} {...restProps}  {...validation} />

    return <input type={type} name={name} value={inputValue} onChange={handleInputChange} {...restProps}  {...validation} />
}

Form.Select = function ({ children, ...restProps }) {
    const [inputValue, validation, handleInputChange] = useInput();

    return <select {...restProps} value={inputValue} onChange={handleInputChange}  {...validation}>{children}</select>
}

Form.TextArea = function ({ ...restProps }) {
    const [inputValue, validation, handleInputChange] = useInput();

    return <textarea {...restProps} value={inputValue} onChange={handleInputChange}  {...validation} />;
}


Form.useValidation = function (name, validator) {
    const { input, validation } = useContext(FormContext);

    const [touched, setTouched] = useContext(FormContext);

    useEffect(() => {
        setTouched(true);
    }, input[name]);

    return touched ? validator(input[name], input, validation) : '';
}








