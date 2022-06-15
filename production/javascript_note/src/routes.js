import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes
} from 'react-router-dom';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesScreen from './screens/notes/index';
import UsersEditScreen from './screens/users/edit';

import PrivateRouter from './components/auth/private_router';

const App = () => {
    let routes = useRoutes([
        { path: '/', element: <HomeScreen /> },
        { path: '/register', element: <RegisterScreen /> },
        { path: '/login', element: <LoginScreen /> },
        { path: '/notes', element: <NotesScreen /> },
        { path: '/users/edit', element: <UsersEditScreen /> },

    ]);
    return routes;
};


const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};




export default AppWrapper;