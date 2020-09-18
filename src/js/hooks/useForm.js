import { useState } from 'react'


export default function useForm(data = {}, onSubmit) {
    const [input, setInput] = useState(data);

    function handleInputChange({ target }) {
        const { name, type } = target;

        const value = type == 'checkbox' ? target.checked : target.value;

        setInput(prevInput => ({ ...prevInput, [name]: value }));
    }


    function handleFormSubmit(e) {
        if (onSubmit) {
            e.preventDefault();
            onSubmit(e, input);
        }
    }


    return [input, handleInputChange, handleFormSubmit];
}