import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { Translation } from "react-i18next";
import ChangeLang from "../components/ChangeLang";

const Header = () => {
    return (
        <header>
            <div className="container-menu-desktop">
                <div className="top-bar">
                    <div className="flex-sb-m h-full w-full container">
                        <div className="left-top-bar">
                        </div>

                        <div className="right-top-bar flex-w h-full">
                            <Translation>{t =>
                                <Link to="/" className="flex-c-m trans-04" style={{paddingLeft: "1.5vw", paddingRight: "1.5vw", fontFamily: 'Times New Roman'}}>                                
                                     {t('FAQ')}
                                </Link>}
                            </Translation> 

                            <Translation>{t =>
                                <Link to="/admin" className="flex-c-m trans-04" style={{paddingLeft: "1.5vw", paddingRight: "1.5vw", fontFamily: 'Times New Roman'}}>
                                    {t('account')}
                                </Link>}
                            </Translation> 
                            
                            <Translation>{t =>
                                <span className="flex-c-m" style={{paddingLeft: "1.5vw", paddingRight: "0.5vw", fontFamily: 'Times New Roman', color: '#dcdcdc'}}>
                                    {t('language')}: 
                                </span>}
                            </Translation> 
                            <div className="flex-c-m"><ChangeLang />  </div>
                                      
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
                                    <Translation>{t =>
                                        <NavLink className="main-menu-navlink" exact to="/" activeClassName="active" style={{fontSize: "1.4em", fontFamily: 'Times New Roman'}}>{t('homepage')}</NavLink>
                                    }</Translation>  
                                </li>

                                <li>
                                    <Translation>{t =>
                                        <NavLink className="main-menu-navlink" exact to="/pricing" style={{fontSize: "1.4em", fontFamily: 'Times New Roman'}}>{t('price')}</NavLink >
                                    }</Translation>                                         
                                </li>

                                <li>
                                    <Translation>{t =>
                                        <NavLink className="main-menu-navlink" exact  to="/about" style={{fontSize: "1.4em", fontFamily: 'Times New Roman'}}>{t('about')}</NavLink>
                                    }</Translation>      
                                </li>

                                <li>
                                    <Translation>{t =>
                                        <NavLink className="main-menu-navlink" exact to="/contact" style={{fontSize: "1.4em", fontFamily: 'Times New Roman'}}>{t('map')}</NavLink>
                                    }</Translation>
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