import { useEffect } from 'react';

import useValidator from './useValidator';

export default function ValidationField({ name, allValues, validation = null, render }) {

    const [setAllValues, msg] = useValidator(name, validation);



    useEffect(() => {
        setAllValues(allValues);
    }, [allValues])

    return render(msg);
} 