import React from 'react';
import '../App';
import {Link} from "react-router-dom";

import '@aws-amplify/ui-react/styles.css';
import useScript from "../functions/useScript";
import useLink from "../functions/useLink";
import scriptTextList from "../scripts/scriptText";
import scriptUrlList from "../scripts/scriptUrl";

const Home = () => {

    useScript(scriptUrlList, scriptTextList)
    useLink("css/util.css", "app")

    return (
        <div>
            <div>
                <img className="img-fluid" src="images/myducshopsign.jpg" alt="IMG"/>
            </div>
            <section className="section-slide p-b-100">
                <div className="wrap-slick1">
                    <div className="slick1">


                        <div className="item-slick1"
                             style={{backgroundImage: "url(images/dentist1-1.jpg)", backgroundSize: "50%"}}>
                            <div className="container h-full m-t--30">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="rollIn"
                                         data-delay="0">
                                    <span className="ltext-201 cl2 respon2">
                                        Bác sĩ tận tình
                                    </span>
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

                        <div className="item-slick1" style={{backgroundImage: "url(images/dental-care.jpg)"}}>
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="fadeInDown"
                                         data-delay="0">
                                    <span className="ltext-201 cl2 respon2">
                                        Dịch vụ chất lượng
                                    </span>
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

                        <div className="item-slick1" style={{backgroundImage: "url(images/chinhnha1.jpg)"}}>
                            <div className="container h-full m-l-80 m-t--30">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft"
                                         data-delay="0">
                                    <span className="ltext-201 cl2 respon2">
                                        Chỉnh nha đẹp tự nhiên
                                    </span>
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
            <footer className="bg3 p-t-75 p-b-32">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Dịch vụ chính
                            </h4>

                            <ul>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Nhổ & trám răng
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Chữa tủy
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Trồng răng giả & Implant
                                    </a>
                                </li>

                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                        Chỉnh nha
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h5 className="stext-301 cl0 p-l-22  p-b-10">Thời gian làm việc</h5>
                            <div>
                                <table style={{borderCollapse: "separate", borderSpacing:"2em 0em"}}>
                                    <tbody>
                                    <tr>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">Thứ 2</td>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 20:00</td>
                                    </tr>
                                    <tr>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">Thứ 3</td>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 20:00</td>
                                    </tr>
                                    <tr>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">Thứ 4</td>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 20:00</td>
                                    </tr>
                                    <tr>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">Thứ 5</td>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 20:00</td>
                                    </tr>
                                    <tr>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">Thứ 6</td>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 20:00</td>
                                    </tr>
                                    <tr>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">Thứ 7</td>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 20:00</td>
                                    </tr>
                                    <tr>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">Chủ Nhật</td>
                                        <td className="stext-107 cl7 hov-cl1 trans-04">8:00 – 11:00</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Thông tin liên lạc
                            </h4>

                            <p className="stext-107 cl7 size-201">
                                Mọi thắc mắc xin vui lòng liên hệ số 0913895695 hoặc gặp trực tiếp bác sĩ tại 204 Thống
                                Nhất
                                P.11 Q.Gò Vấp để được tư vấn miễn phí

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

                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Newsletter
                            </h4>

                            <form>
                                <div className="wrap-input1 w-full p-b-4">
                                    <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email"
                                           placeholder="email@example.com"/>
                                    <div className="focus-input1 trans-04"></div>
                                </div>

                                <div className="p-t-18">
                                    <button
                                        className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="p-t-40">
                        <div className="flex-c-m flex-w p-b-18">
                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-01.png" alt="ICON-PAY"/>
                            </a>

                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-02.png" alt="ICON-PAY"/>
                            </a>

                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-03.png" alt="ICON-PAY"/>
                            </a>

                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-04.png" alt="ICON-PAY"/>
                            </a>

                            <a href="#" className="m-all-1">
                                <img src="images/icons/icon-pay-05.png" alt="ICON-PAY"/>
                            </a>
                        </div>

                        <p className="stext-107 cl6 txt-center">
                            Nha Khoa Mỹ Đức &copy; All rights reserved

                        </p>
                    </div>
                </div>
            </footer>
            <div className="btn-back-to-top" id="myBtn">
            <span className="symbol-btn-back-to-top">
                <i className="zmdi zmdi-chevron-up"></i>
            </span>
            </div>
        </div>

    );
}

export default Home;