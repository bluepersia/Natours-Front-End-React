import { useState, useEffect } from 'react';
import validate from './validation';

export default function useValidator(name, validation) {
    const [touched, setTouched] = useState(false);
    const [allValues, setAllValues] = useState({});

    const [msg, setMsg] = useState('');


    useEffect(() => {

        const val = allValues && allValues[name];

        if (val)
            setTouched(true);

        setMsg(touched || val ? validate(val, allValues, validation) : '');

    }, [allValues])


    return [setAllValues, msg];
}