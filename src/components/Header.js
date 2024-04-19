import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container-menu-desktop">
                <div className="top-bar">
                    <div className="flex-sb-m h-full w-full container">
                        <div className="left-top-bar">
                        </div>

                        <div className="right-top-bar flex-w h-full">
                            <Link to="/" className="flex-c-m trans-04" style={{paddingLeft: "1.5vw", paddingRight: "1.5vw"}}>
                                Help & FAQs
                            </Link>

                            <Link to="/admin" className="flex-c-m trans-04" style={{paddingLeft: "1.5vw", paddingRight: "1.5vw"}}>
                                My Account (In develop)
                            </Link>

                            <Link to="/" className="flex-c-m trans-04" style={{paddingLeft: "1.5vw", paddingRight: "1.5vw"}}>
                                VI
                            </Link>

                            <Link to="/" className="flex-c-m trans-04" style={{paddingLeft: "1.5vw", paddingRight: "1.5vw"}}>
                                EN
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="wrap-menu-desktop">

                    <nav className="limiter-menu-desktop container justify-content-center">
                        <Link to="/" className="logo">
                            <img src="images/myduclogo.jpg" alt="IMG-LOGO"/>
                        </Link>
                        <div className="menu-desktop">
                            <ul className="main-menu">
                                <li>
                                    <NavLink className="main-menu-navlink" exact to="/" activeClassName="active" style={{fontSize: "1.2em"}}>Trang Chủ</NavLink>
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
                                    <NavLink className="main-menu-navlink" exact to="/" style={{fontSize: "1.2em"}}>Bảng Giá</NavLink >
                                </li>

                                <li>
                                    <NavLink className="main-menu-navlink" exact  to="/" style={{fontSize: "1.2em"}}>Giới Thiệu</NavLink>
                                </li>

                                <li>
                                    <NavLink className="main-menu-navlink" exact to="/contact" style={{fontSize: "1.2em"}}>Bản Đồ</NavLink>
                                </li>

                            </ul>
                        </div>

                        {/*<div className="wrap-icon-header flex-w flex-r-m">*/}
                        {/*    <div*/}
                        {/*        className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">*/}
                        {/*        <i className="zmdi zmdi-search"></i>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </nav>
                </div>

            </div>

            <div className="header-container">
            </div>
            <div>
                <picture>
                    <source media="(max-width:900px)" srcSet="images/myducshopsign-big.jpg"/>
                    <img width="100%" height="20%" src="images/myducshopsign-small.jpg" alt="IMG"/>
                </picture>

            </div>
        </header>
    );
};
export default Header;