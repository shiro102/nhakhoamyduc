import React, {Fragment, useEffect, useState} from 'react';
import {Link, Outlet, Routes, Route, BrowserRouter, useLocation} from "react-router-dom";

import Header from "./Header";
import useScript from "../../functions/useScript.js";
import useLink from "../../functions/useLink.js";
import scriptTextList from "../../scripts/scriptText.js";
import scriptUrlList from "../../scripts/scriptUrl.js";
import Delayed from "./Delayed.jsx";
import Footer from "./Footer.jsx";

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