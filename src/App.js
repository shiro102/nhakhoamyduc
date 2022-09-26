import React from 'react';
import './App.css';
import {Link, useRoutes } from "react-router-dom";

import '@aws-amplify/ui-react/styles.css';
import useScript from "./functions/useScript";
import useLink from "./functions/useLink";
import routes from "./routes";
import Admin from "./components/Admin";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import NoMatch from "./components/NoMatch";



const App = () => {

    const content = useRoutes(routes);
    return (
        content
    );
}

export default App;
