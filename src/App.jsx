import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { Toaster } from 'sonner';

import "@aws-amplify/ui-react/styles.css";
import routes from "./routes.jsx";

const App = () => {

    const content = useRoutes(routes);
    return (
        <>
            <Toaster position="top-center" />
            {content}
        </>
    );
}

export default App;
