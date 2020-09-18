import React, { createContext, useState, useEffect } from 'react';
import { getUserUrl } from '../../../utils/api/url';


const { Provider, Consumer } = createContext();

function GlobalContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {

        async function fetchData() {

            try {
                const response = await fetch(getUserUrl('me'));

                setUser(response.data.data.user);
            }
            catch (err) {

            }
        }

        fetchData();

        document.addEventListener('requestSuccess', ({ detail }) => {


            const { data } = detail

            if (data) {
                if (data.data.user && data.token)
                    setUser(data.data.user);
            }
        });


        document.addEventListener('loggedOut', () => setUser(null));
    }, []);

    return (
        <Provider value={{ user }}>
            {children}
        </Provider>
    )
}



export { GlobalContextProvider, Consumer as GlobalContextConsumer };
