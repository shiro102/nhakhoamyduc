import App from './App';
import Admin from "./components/Admin";
import NoMatch from "./components/NoMatch";
import Pricing from "./components/Pricing";
import Layout from "./layout/Layout";
import Home from "./components/Home"
import About from "./components/About";

const routes = [
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/pricing",
                element: <Pricing />,
            },
            {
                path: "/about",
                element: <About />,
            },
            { path: "*", element: <NoMatch /> },
        ],
    },
    { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;