import React from 'react';


export default function ErrorHeading({ err }) {

    return <h1 className="heading-secondary--error">{err.response ? err.response.data.message : 'Something went wrong!'}</h1>
}