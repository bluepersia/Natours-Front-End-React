import { useState, useEffect } from 'react';
import validate from '../components/*/Form/validation';

export default function useValidator(name, validation) {
    const [allValues, setAllValues] = useState({});

    const [msg, setMsg] = useState('');


    useEffect(() => {

        setMsg(validate(allValues && allValues[name], allValues, validation));

    }, [allValues])


    return [setAllValues, msg];
}