import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container-menu-desktop">
                <div className="top-bar">
                    <div className="content-topbar flex-sb-m h-full container">
                        <div className="left-top-bar">
                        </div>

                        <div className="right-top-bar flex-w h-full">
                            <Link to="/" className="flex-c-m trans-04 p-lr-25">
                                Help & FAQs
                            </Link>

                            <Link to="/admin" className="flex-c-m trans-04 p-lr-25">
                                My Account (In develop)
                            </Link>

                            <Link to="/" className="flex-c-m trans-04 p-lr-25">
                                VI
                            </Link>

                            <Link to="/" className="flex-c-m trans-04 p-lr-25">
                                EN
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="wrap-menu-desktop">
                    <nav className="limiter-menu-desktop container">

                        <Link to="/" className="logo">
                            <img src="images/myduclogo.jpg" alt="IMG-LOGO"/>
                        </Link>

                        <div className="menu-desktop">
                            <ul className="main-menu">
                                <li className="active-menu">
                                    <Link to="/">Home</Link>
                                    {/*<ul className="sub-menu">*/}
                                    {/*    <li><Link to="index.html">Homepage 1</Link></li>*/}
                                    {/*    <li><Link to="home-02.html">Homepage 2</Link></li>*/}
                                    {/*    <li><Link to="home-03.html">Homepage 3</Link></li>*/}
                                    {/*</ul>*/}
                                </li>

                                {/*<li className="label1" data-label1="hot">*/}
                                {/*    <Link to="shoping-cart.html">Features</Link>*/}
                                {/*</li>*/}

                                <li>
                                    <Link to="/pricing"> Pricing</Link >
                                </li>

                                <li>
                                    <Link to="/about">About</Link>
                                </li>

                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="wrap-icon-header flex-w flex-r-m">
                            <div
                                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                <i className="zmdi zmdi-search"></i>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="logo-mobile">
                    <Link to="/"><img src="images/myduclogo.jpg" alt="IMG-LOGO"/></Link>
                </div>
            </div>

            <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                <div className="container-search-header">
                    <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                        <img src="images/icons/icon-close2.png" alt="CLOSE"/>
                    </button>

                    <form className="wrap-search-header flex-w p-l-15">
                        <button className="flex-c-m trans-04">
                            <i className="zmdi zmdi-search"></i>
                        </button>
                        <input className="plh3" type="text" name="search" placeholder="Search..."/>
                    </form>
                </div>
            </div>

            <div>
                <img width="100%" height="20%" src="images/myducshopsign1.jpg" alt="IMG"/>
            </div>
        </header>
    );
};
export default Header;