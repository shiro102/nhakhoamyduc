import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { Toaster } from 'sonner';

import routes from "./routes.jsx";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

    const content = useRoutes(routes);
    return (
        <>
            <ScrollToTop />
            <Toaster position="top-center" />
            {content}
        </>
    );
}

export default App;
