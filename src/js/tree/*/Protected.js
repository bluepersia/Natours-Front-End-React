import React, { useContext } from 'react';
import { GlobalContext } from './contexts/GlobalContext';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, ...restProps }) {
    const { user } = useContext(GlobalContext);


    return user ? <Route {...restProps}>{children}</Route> : <Redirect to={{ pathname: '/login', state: { from: useLocation() } }} />;
}