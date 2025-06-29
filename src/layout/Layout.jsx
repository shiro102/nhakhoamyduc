import React, {Fragment, useEffect, useState} from 'react';
import {Link, Outlet, Routes, Route, BrowserRouter, useLocation} from "react-router-dom";

import Header from "../components/Header";
import useScript from "../functions/useScript";
import useLink from "../functions/useLink";
import scriptTextList from "../scripts/scriptText";
import scriptUrlList from "../scripts/scriptUrl";
import Delayed from "./Delayed";
import Footer from "../components/layout/Footer.jsx";

const Layout = () => {

    useScript(scriptUrlList, scriptTextList);
    useLink("css/util.css", "app");
    return (        
        <Fragment>
            <Delayed waitBeforeShow={500}>
                <Header/>
                <Outlet></Outlet>
                <Footer/>
            </Delayed>
        </Fragment>
    );
};
export default Layout;