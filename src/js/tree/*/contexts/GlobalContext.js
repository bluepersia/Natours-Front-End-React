import React, { createContext, useState, useEffect } from 'react';
import { getMe } from '../../../utils/api/user';
import setAuthorizationToken from '../../../utils/authorizationToken';


const { Provider, Consumer } = createContext();

function GlobalContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {

        async function fetchData() {

            try {
                const user = await getMe();

                if (user)
                    setUser(user);
            }
            catch (err) {

            }
        }

        fetchData();

        document.addEventListener('requestSuccess', ({ detail }) => {


            const { data } = detail

            if (data) {
                if (data.data.user && data.token) {
                    setUser(data.data.user);
                    setAuthorizationToken(data.token);
                }
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
