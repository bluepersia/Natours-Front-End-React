import React from 'react';
import useAlert from './useAlert';


export default function Alert() {
    const [[msg, success]] = useAlert();

    return msg && (
        <div className={`alert alert--${success ? 'success' : 'error'}`}>
            {msg}
        </div>
    );

}