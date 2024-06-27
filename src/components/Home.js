import React, { useEffect, useState } from 'react';
import '../App';
import {Link} from "react-router-dom";

import '@aws-amplify/ui-react/styles.css';
import useScript from "../functions/useScript";
import useLink from "../functions/useLink";
import scriptTextList from "../scripts/scriptText";
import scriptUrlList from "../scripts/scriptUrl";
import { Translation } from "react-i18next";

const Home = () => {
    useScript(scriptUrlList, scriptTextList)
    useLink("css/util.css", "app")

    return (
        <div>
            <section className="section-slide">
                <div className="wrap-slick1">
                    <div className="slick1">
                        
                        <div className="item-slick1 background-image-1">
                            <div className="container h-full m-t--30">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="rollIn"
                                         data-delay="0">
                                    <Translation>{t => 
                                        <span className="ltext-201 cl2 respon2" style={{color:"#162F2E"}}>
                                            {t('slogan1')}
                                        </span>}
                                    </Translation>                                    
                                    </div>

                                    {/*<div className="layer-slick1 animated visible-false" data-appear="lightSpeedIn"*/}
                                    {/*     data-delay="800">*/}
                                    {/*    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">*/}
                                    {/*        Jackets & Coats*/}
                                    {/*    </h2>*/}
                                    {/*</div>*/}

                                    {/*<div className="layer-slick1 animated visible-false" data-appear="slideInUp"*/}
                                    {/*     data-delay="1600">*/}
                                    {/*    <a href="product.html"*/}
                                    {/*       className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">*/}
                                    {/*        Shop Now*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        <div className="item-slick1 background-image-2">
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="fadeInDown"
                                         data-delay="0">
                                    <Translation>{t => 
                                        <span className="ltext-201 cl2 respon2" style={{color:"#162F2E"}}>
                                            {t('slogan2')}
                                        </span>}
                                    </Translation>
                                    </div>

                                    {/*<div className="layer-slick1 animated visible-false" data-appear="fadeInUp"*/}
                                    {/*     data-delay="800">*/}
                                    {/*    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">*/}
                                    {/*        NEW SEASON*/}
                                    {/*    </h2>*/}
                                    {/*</div>*/}

                                    {/*<div className="layer-slick1 animated visible-false" data-appear="zoomIn"*/}
                                    {/*     data-delay="1600">*/}
                                    {/*    <a href="product.html"*/}
                                    {/*       className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">*/}
                                    {/*        Shop Now*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        <div className="item-slick1 background-image-4">
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft"
                                         data-delay="0">
                                    <Translation>{t => 
                                        <span className="ltext-201 cl2 respon2" style={{color:"#162F2E"}}>
                                            {t('slogan3')}
                                        </span>}
                                    </Translation>
                                    </div>

                                    {/*<div className="layer-slick1 animated visible-false" data-appear="rotateInUpRight"*/}
                                    {/*     data-delay="800">*/}
                                    {/*    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">*/}
                                    {/*        New arrivals*/}
                                    {/*    </h2>*/}
                                    {/*</div>*/}

                                    {/*<div className="layer-slick1 animated visible-false" data-appear="rotateIn"*/}
                                    {/*     data-delay="1600">*/}
                                    {/*    <a href="product.html"*/}
                                    {/*       className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">*/}
                                    {/*        Shop Now*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="btn-back-to-top" id="myBtn">
            <span className="symbol-btn-back-to-top">
                <i className="zmdi zmdi-chevron-up"></i>
            </span>
            </div>
        </div>

    );
}

export default Home;