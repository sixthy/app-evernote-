import React from 'react';
import { BrowserRouter as Router, 
    Routes, 
    Route,
    useRoutes } from 'react-router-dom';
import HomeScreen from './screens/home';

const App = () => {
    let routes = useRoutes([
        { path : '/', element : <HomeScreen /> },
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