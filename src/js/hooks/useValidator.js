import { useState, useEffect } from 'react';
import validate from '../components/*/Form/validation';

export default function useValidator(name, validation) {
    const [touched, setTouched] = useState(new Set([]));
    const [allValues, setAllValues] = useState({});

    const [msg, setMsg] = useState('');


    useEffect(() => {

        const val = allValues && allValues[name];

        if (val !== undefined)
            setTouched(prevTouched => new Set([...prevTouched.values(), name]));

        setMsg(touched.has(name) ? validate(val, allValues, validation) : '');

    }, [allValues])


    return [setAllValues, msg];
}