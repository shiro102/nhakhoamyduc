import React from 'react';
import {Link} from "react-router-dom";
import { Translation } from "react-i18next";

const Footer = () => {
    return (
        <footer className="bg3 p-t-75 p-b-32">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <Translation>{t =>  
                            <h5 className="stext-301 cl0 p-l-22  p-b-10">{t('workingTime1')}</h5>}
                        </Translation> 

                        <div>
                            <table style={{borderCollapse: "separate", borderSpacing:"1em 0em"}}>
                                <tbody>
                                <tr>
                                    <th className="stext-107 cl7 hov-cl1 trans-04"></th>
                                    <Translation>{t =>  
                                        <th className="stext-107 cl7 hov-cl1 trans-04">{t('shift1')}</th>}
                                    </Translation> 
                                    <Translation>{t =>  
                                        <th className="stext-107 cl7 hov-cl1 trans-04">{t('shift2')}</th>}
                                    </Translation>
                                </tr>
                                <tr>
                                    <Translation>{t => 
                                        <td className="stext-107 cl7 hov-cl1 trans-04">{t('day1')}</td>}
                                    </Translation> 
                                    <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 12:00</td>
                                    <td className="stext-107 cl7 hov-cl1 trans-04">14:00 – 20:00</td>
                                </tr>
                                <tr>
                                    <Translation>{t => 
                                        <td className="stext-107 cl7 hov-cl1 trans-04">{t('day2')}</td>}
                                    </Translation> 
                                    <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 12:00</td>
                                    <td className="stext-107 cl7 hov-cl1 trans-04">14:00 – 20:00</td>
                                </tr>
                                <tr>
                                    <Translation>{t => 
                                        <td className="stext-107 cl7 hov-cl1 trans-04">{t('day3')}</td>}
                                    </Translation> 
                                    <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 12:00</td>
                                    <td className="stext-107 cl7 hov-cl1 trans-04">14:00 – 20:00</td>
                                </tr>
                                <tr>
                                    <Translation>{t => 
                                        <td className="stext-107 cl7 hov-cl1 trans-04">{t('day4')}</td>}
                                    </Translation> 
                                    <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 12:00</td>
                                    <td className="stext-107 cl7 hov-cl1 trans-04">14:00 – 20:00</td>
                                </tr>
                                <tr>
                                    <Translation>{t => 
                                        <td className="stext-107 cl7 hov-cl1 trans-04">{t('day5')}</td>}
                                    </Translation> 
                                    <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 12:00</td>
                                    <td className="stext-107 cl7 hov-cl1 trans-04">14:00 – 20:00</td>
                                </tr>
                                <tr>
                                    <Translation>{t => 
                                        <td className="stext-107 cl7 hov-cl1 trans-04">{t('day6')}</td>}
                                    </Translation> 
                                    <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 12:00</td>
                                    <td className="stext-107 cl7 hov-cl1 trans-04">14:00 – 20:00</td>
                                </tr>
                                <tr>
                                    <Translation>{t => 
                                        <td className="stext-107 cl7 hov-cl1 trans-04">{t('day7')}</td>}
                                    </Translation> 
                                    <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 11:00</td>
                                    <Translation>{t => 
                                        <td className="stext-107 cl7 hov-cl1 trans-04">{t('shift3')}</td>}
                                    </Translation> 
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <Translation>{t => 
                            <h4 className="stext-301 cl0 p-b-30">
                                {t('address')}
                            </h4>}
                        </Translation>

                        <Translation>{t =>         
                        <p className="stext-107 cl7 size-201">
                            {t('realAddress')}
                        </p>}
                        </Translation>
                    </div>

                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <Translation>{t =>  
                        <h4 className="stext-301 cl0 p-b-30">
                            {t('contact')}
                        </h4>}
                        </Translation>

                        <p className="stext-107 cl7 size-201">
                            <Translation>{t =>
                            <span> {t('phoneNum1')}</span>}
                            </Translation> <br/>
                            <Translation>{t =>
                            <span> {t('phoneNum2')}</span>}
                            </Translation> <br/>
                            <Translation>{t =>
                            <span> {t('email')}</span>}
                            </Translation> <br/>
                        </p>

                        <div className="p-t-27">
                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-instagram"></i>
                            </a>

                            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>

                    {/*<div className="col-sm-6 col-lg-3 p-b-50">*/}
                    {/*    <h4 className="stext-301 cl0 p-b-30">*/}
                    {/*        Newsletter*/}
                    {/*    </h4>*/}

                    {/*    <form>*/}
                    {/*        <div className="wrap-input1 w-full p-b-4">*/}
                    {/*            <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email"*/}
                    {/*                   placeholder="email@example.com"/>*/}
                    {/*            <div className="focus-input1 trans-04"></div>*/}
                    {/*        </div>*/}

                    {/*        <div className="p-t-18">*/}
                    {/*            <button*/}
                    {/*                className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">*/}
                    {/*                Subscribe*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>


                <div className="p-t-40">
                        <p className="stext-107 cl6 txt-center">
                            <Translation>{t =>
                                <span>{t('name')} </span>}
                            </Translation>
                            &copy; All rights reserved
                        </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;