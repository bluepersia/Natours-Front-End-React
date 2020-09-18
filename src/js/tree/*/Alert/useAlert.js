import { useEffect, useState } from 'react';


export default function useAlert() {
    const [alert, setAlert] = useState(['', true, 7]);



    useEffect(() => {

        document.addEventListener('requestFail', ({ detail }) => setAlert([detail.response ? detail.response.data.message : 'Something went wrong!', false, 7]));

        document.addEventListener('loggedIn', () => setAlert(['Successfully logged in!', true, 7]));
    }, []);


    useEffect(() => {


        let isCurrent = true;

        if (alert[0])
            setTimeout(() => isCurrent && setAlert(['', false, 7]), alert[2] * 1000);

        return () => isCurrent = false;

    }, [alert]);

    return [alert];
}