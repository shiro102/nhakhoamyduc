import Admin from "./components/admin/Admin";
import NoMatch from "./components/NoMatch";
import Pricing from "./components/home/Pricing";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home"
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const routes = [
    {
        path: "/login",
        element: <Login />
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
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/admin",
                element: (
                    <ProtectedRoute>
                        <Admin />
                    </ProtectedRoute>
                ),
            },
            { path: "*", element: <NoMatch /> },
        ],
    },
    { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;