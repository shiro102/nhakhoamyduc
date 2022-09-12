import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from "react-router-dom";

import '@aws-amplify/ui-react/styles.css';
import useScript from "./components/useScript";
import useLink from "./components/useLink";

const App = props => {

    // Add script for index file
    useScript("vendor/jquery/jquery-3.2.1.min.js", "");
    useScript("vendor/animsition/js/animsition.min.js", "");
    useScript("vendor/bootstrap/js/popper.js", "");
    useScript("vendor/bootstrap/js/bootstrap.min.js", "");
    useScript("vendor/select2/select2.min.js", "");
    useScript("", "$(\".js-select2\").each(function(){\n" +
        "        $(this).select2({\n" +
        "          minimumResultsForSearch: 20,\n" +
        "          dropdownParent: $(this).next('.dropDownSelect2')\n" +
        "        });\n" +
        "      })");
    useScript("vendor/daterangepicker/moment.min.js", "");
    useScript("vendor/daterangepicker/daterangepicker.js", "");
    useScript("vendor/slick/slick.min.js", "");
    useScript("js/slick-custom.js", "");
    useScript("vendor/parallax100/parallax100.js", "");
    useScript("", "$('.parallax100').parallax100();");
    useScript("vendor/MagnificPopup/jquery.magnific-popup.min.js", "");
    useScript("", "$('.gallery-lb').each(function() { // the containers for all your galleries\n" +
        "        $(this).magnificPopup({\n" +
        "          delegate: 'a', // the selector for gallery item\n" +
        "          type: 'image',\n" +
        "          gallery: {\n" +
        "            enabled:true\n" +
        "          },\n" +
        "          mainClass: 'mfp-fade'\n" +
        "        });\n" +
        "      });");
    useScript("vendor/isotope/isotope.pkgd.min.js", "");
    useScript("vendor/sweetalert/sweetalert.min.js", "");
    useScript("", "      $('.js-addwish-b2').on('click', function(e){\n" +
        "        e.preventDefault();\n" +
        "      });\n" +
        "\n" +
        "      $('.js-addwish-b2').each(function(){\n" +
        "        var nameProduct = $(this).parent().parent().find('.js-name-b2').html();\n" +
        "        $(this).on('click', function(){\n" +
        "          swal(nameProduct, \"is added to wishlist !\", \"success\");\n" +
        "\n" +
        "          $(this).addClass('js-addedwish-b2');\n" +
        "          $(this).off('click');\n" +
        "        });\n" +
        "      });\n" +
        "\n" +
        "      $('.js-addwish-detail').each(function(){\n" +
        "        var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();\n" +
        "\n" +
        "        $(this).on('click', function(){\n" +
        "          swal(nameProduct, \"is added to wishlist !\", \"success\");\n" +
        "\n" +
        "          $(this).addClass('js-addedwish-detail');\n" +
        "          $(this).off('click');\n" +
        "        });\n" +
        "      });\n" +
        "      \n" +
        "      $('.js-addcart-detail').each(function(){\n" +
        "        var nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();\n" +
        "        $(this).on('click', function(){\n" +
        "          swal(nameProduct, \"is added to cart !\", \"success\");\n" +
        "        });\n" +
        "      });");
    useScript("vendor/perfect-scrollbar/perfect-scrollbar.min.js", "");
    useScript("", " $('.js-pscroll').each(function(){\n" +
        "        $(this).css('position','relative');\n" +
        "        $(this).css('overflow','hidden');\n" +
        "        var ps = new PerfectScrollbar(this, {\n" +
        "          wheelSpeed: 1,\n" +
        "          scrollingThreshold: 1000,\n" +
        "          wheelPropagation: false,\n" +
        "        });\n" +
        "\n" +
        "        $(window).on('resize', function(){\n" +
        "          ps.update();\n" +
        "        })\n" +
        "      });");
    useScript("js/main.js", "");

    useLink("css/util.css", "app")

    return (
        <div>
            {/*Header*/}
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
                                        <Link to="/pricing">Pricing</Link>
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

                {/*<div className="wrap-header-mobile">*/}

                {/*    <div className="wrap-icon-header flex-w flex-r-m m-r-15">*/}
                {/*        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">*/}
                {/*            <i className="zmdi zmdi-search"></i>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">*/}
                {/*<span className="hamburger-box">*/}
                {/*	<span className="hamburger-inner"></span>*/}
                {/*</span>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*<div className="menu-mobile">*/}
                {/*    <ul className="topbar-mobile">*/}
                {/*        <li>*/}
                {/*            <div className="left-top-bar">*/}
                {/*            </div>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <div className="right-top-bar flex-w h-full">*/}
                {/*                <Link to="#" className="flex-c-m p-lr-10 trans-04">*/}
                {/*                    Help & FAQs*/}
                {/*                </Link>*/}

                {/*                <Link to="#" className="flex-c-m p-lr-10 trans-04">*/}
                {/*                    My Account*/}
                {/*                </Link>*/}

                {/*                <Link to="#" className="flex-c-m p-lr-10 trans-04">*/}
                {/*                    VI*/}
                {/*                </Link>*/}

                {/*                <Link to="#" className="flex-c-m p-lr-10 trans-04">*/}
                {/*                    EN*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*    </ul>*/}

                {/*    <ul className="main-menu-m">*/}
                {/*        <li>*/}
                {/*            <Link to="index.html">Home</Link>*/}
                {/*            <span className="arrow-main-menu-m">*/}
                {/*		<i className="fa fa-angle-right" aria-hidden="true"></i>*/}
                {/*	</span>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <Link to="product.html">Pricing</Link>*/}
                {/*        </li>*/}

                {/*        /!*<li>*!/*/}
                {/*        /!*    <Link to="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</Link>*!/*/}
                {/*        /!*</li>*!/*/}

                {/*        <li>*/}
                {/*            <Link to="about.html">About</Link>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <Link to="contact.html">Contact</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

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
            </header>

            <div className="p-b-100">
                <img className="img-fluid" src="images/myducshopsign.jpg" alt="IMG"/>
            </div>
            {/*/!*Cart*!/*/}
            {/*<div className="wrap-header-cart js-panel-cart">*/}
            {/*    <div className="s-full js-hide-cart"></div>*/}

            {/*    <div className="header-cart flex-col-l p-l-65 p-r-25">*/}
            {/*        <div className="header-cart-title flex-w flex-sb-m p-b-8">*/}
            {/*	<span className="mtext-103 cl2">*/}
            {/*		Your Cart*/}
            {/*	</span>*/}

            {/*            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">*/}
            {/*                <i className="zmdi zmdi-close"></i>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="header-cart-content flex-w js-pscroll">*/}
            {/*            <ul className="header-cart-wrapitem w-full">*/}
            {/*                <li className="header-cart-item flex-w flex-t m-b-12">*/}
            {/*                    <div className="header-cart-item-img">*/}
            {/*                        <img src="images/item-cart-01.jpg" alt="IMG"/>*/}
            {/*                    </div>*/}

            {/*                    <div className="header-cart-item-txt p-t-8">*/}
            {/*                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">*/}
            {/*                            White Shirt Pleat*/}
            {/*                        </a>*/}

            {/*                        <span className="header-cart-item-info">*/}
            {/*					1 x $19.00*/}
            {/*				</span>*/}
            {/*                    </div>*/}
            {/*                </li>*/}

            {/*                <li className="header-cart-item flex-w flex-t m-b-12">*/}
            {/*                    <div className="header-cart-item-img">*/}
            {/*                        <img src="images/item-cart-02.jpg" alt="IMG"/>*/}
            {/*                    </div>*/}

            {/*                    <div className="header-cart-item-txt p-t-8">*/}
            {/*                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">*/}
            {/*                            Converse All Star*/}
            {/*                        </a>*/}

            {/*                        <span className="header-cart-item-info">*/}
            {/*					1 x $39.00*/}
            {/*				</span>*/}
            {/*                    </div>*/}
            {/*                </li>*/}

            {/*                <li className="header-cart-item flex-w flex-t m-b-12">*/}
            {/*                    <div className="header-cart-item-img">*/}
            {/*                        <img src="images/item-cart-03.jpg" alt="IMG"/>*/}
            {/*                    </div>*/}

            {/*                    <div className="header-cart-item-txt p-t-8">*/}
            {/*                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">*/}
            {/*                            Nixon Porter Leather*/}
            {/*                        </a>*/}

            {/*                        <span className="header-cart-item-info">*/}
            {/*					1 x $17.00*/}
            {/*				</span>*/}
            {/*                    </div>*/}
            {/*                </li>*/}
            {/*            </ul>*/}

            {/*            <div className="w-full">*/}
            {/*                <div className="header-cart-total w-full p-tb-40">*/}
            {/*                    Total: $75.00*/}
            {/*                </div>*/}

            {/*                <div className="header-cart-buttons flex-w w-full">*/}
            {/*                    <a href="shoping-cart.html"*/}
            {/*                       className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">*/}
            {/*                        View Cart*/}
            {/*                    </a>*/}

            {/*                    <a href="shoping-cart.html"*/}
            {/*                       className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">*/}
            {/*                        Check Out*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*Slider*/}
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
            {/*/!*Banner*!/*/}
            {/*<div className="sec-banner bg0 p-t-80 p-b-50">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">*/}
            {/*                <div className="block1 wrap-pic-w">*/}
            {/*                    <img src="images/banner-01.jpg" alt="IMG-BANNER"/>*/}

            {/*                        <a href="product.html"*/}
            {/*                           className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">*/}
            {/*                            <div className="block1-txt-child1 flex-col-l">*/}
            {/*					<span className="block1-name ltext-102 trans-04 p-b-8">*/}
            {/*						Women*/}
            {/*					</span>*/}

            {/*                                <span className="block1-info stext-102 trans-04">*/}
            {/*						Spring 2018*/}
            {/*					</span>*/}
            {/*                            </div>*/}

            {/*                            <div className="block1-txt-child2 p-b-4 trans-05">*/}
            {/*                                <div className="block1-link stext-101 cl0 trans-09">*/}
            {/*                                    Shop Now*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">*/}
            {/*                <div className="block1 wrap-pic-w">*/}
            {/*                    <img src="images/banner-02.jpg" alt="IMG-BANNER"/>*/}

            {/*                        <a href="product.html"*/}
            {/*                           className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">*/}
            {/*                            <div className="block1-txt-child1 flex-col-l">*/}
            {/*					<span className="block1-name ltext-102 trans-04 p-b-8">*/}
            {/*						Men*/}
            {/*					</span>*/}

            {/*                                <span className="block1-info stext-102 trans-04">*/}
            {/*						Spring 2018*/}
            {/*					</span>*/}
            {/*                            </div>*/}

            {/*                            <div className="block1-txt-child2 p-b-4 trans-05">*/}
            {/*                                <div className="block1-link stext-101 cl0 trans-09">*/}
            {/*                                    Shop Now*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">*/}
            {/*                <div className="block1 wrap-pic-w">*/}
            {/*                    <img src="images/banner-03.jpg" alt="IMG-BANNER"/>*/}

            {/*                        <a href="product.html"*/}
            {/*                           className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">*/}
            {/*                            <div className="block1-txt-child1 flex-col-l">*/}
            {/*					<span className="block1-name ltext-102 trans-04 p-b-8">*/}
            {/*						Accessories*/}
            {/*					</span>*/}

            {/*                                <span className="block1-info stext-102 trans-04">*/}
            {/*						New Trend*/}
            {/*					</span>*/}
            {/*                            </div>*/}

            {/*                            <div className="block1-txt-child2 p-b-4 trans-05">*/}
            {/*                                <div className="block1-link stext-101 cl0 trans-09">*/}
            {/*                                    Shop Now*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*/!*Product*!/*/}
            {/*<section className="bg0 p-t-23 p-b-140">*/}
            {/*    <div className="container">*/}
            {/*        <div className="p-b-10">*/}
            {/*            <h3 className="ltext-103 cl5">*/}
            {/*                Product Overview*/}
            {/*            </h3>*/}
            {/*        </div>*/}

            {/*        <div className="flex-w flex-sb-m p-b-52">*/}
            {/*            <div className="flex-w flex-l-m filter-tope-group m-tb-10">*/}
            {/*                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"*/}
            {/*                        data-filter="*">*/}
            {/*                    All Products*/}
            {/*                </button>*/}

            {/*                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">*/}
            {/*                    Women*/}
            {/*                </button>*/}

            {/*                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">*/}
            {/*                    Men*/}
            {/*                </button>*/}

            {/*                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">*/}
            {/*                    Bag*/}
            {/*                </button>*/}

            {/*                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">*/}
            {/*                    Shoes*/}
            {/*                </button>*/}

            {/*                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">*/}
            {/*                    Watches*/}
            {/*                </button>*/}
            {/*            </div>*/}

            {/*            <div className="flex-w flex-c-m m-tb-10">*/}
            {/*                <div*/}
            {/*                    className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">*/}
            {/*                    <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>*/}
            {/*                    <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>*/}
            {/*                    Filter*/}
            {/*                </div>*/}

            {/*                <div*/}
            {/*                    className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">*/}
            {/*                    <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>*/}
            {/*                    <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>*/}
            {/*                    Search*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="dis-none panel-search w-full p-t-10 p-b-15">*/}
            {/*                <div className="bor8 dis-flex p-l-15">*/}
            {/*                    <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">*/}
            {/*                        <i className="zmdi zmdi-search"></i>*/}
            {/*                    </button>*/}

            {/*                    <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product"*/}
            {/*                           placeholder="Search"/>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="dis-none panel-filter w-full p-t-10">*/}
            {/*                <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">*/}
            {/*                    <div className="filter-col1 p-r-15 p-b-27">*/}
            {/*                        <div className="mtext-102 cl2 p-b-15">*/}
            {/*                            Sort By*/}
            {/*                        </div>*/}

            {/*                        <ul>*/}
            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Default*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Popularity*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Average rating*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04 filter-link-active">*/}
            {/*                                    Newness*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Price: Low to High*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Price: High to Low*/}
            {/*                                </a>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}

            {/*                    <div className="filter-col2 p-r-15 p-b-27">*/}
            {/*                        <div className="mtext-102 cl2 p-b-15">*/}
            {/*                            Price*/}
            {/*                        </div>*/}

            {/*                        <ul>*/}
            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04 filter-link-active">*/}
            {/*                                    All*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    $0.00 - $50.00*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    $50.00 - $100.00*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    $100.00 - $150.00*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    $150.00 - $200.00*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    $200.00+*/}
            {/*                                </a>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}

            {/*                    <div className="filter-col3 p-r-15 p-b-27">*/}
            {/*                        <div className="mtext-102 cl2 p-b-15">*/}
            {/*                            Color*/}
            {/*                        </div>*/}

            {/*                        <ul>*/}
            {/*                            <li className="p-b-6">*/}
            {/*						<span className="fs-15 lh-12 m-r-6" style={{color: "#222"}}>*/}
            {/*							<i className="zmdi zmdi-circle"></i>*/}
            {/*						</span>*/}

            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Black*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*						<span className="fs-15 lh-12 m-r-6" style={{color: "#4272d7"}}>*/}
            {/*							<i className="zmdi zmdi-circle"></i>*/}
            {/*						</span>*/}

            {/*                                <a href="#" className="filter-link stext-106 trans-04 filter-link-active">*/}
            {/*                                    Blue*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*						<span className="fs-15 lh-12 m-r-6" style={{color: "#b3b3b3"}}>*/}
            {/*							<i className="zmdi zmdi-circle"></i>*/}
            {/*						</span>*/}

            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Grey*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*						<span className="fs-15 lh-12 m-r-6" style={{color: "#00ad5f"}}>*/}
            {/*							<i className="zmdi zmdi-circle"></i>*/}
            {/*						</span>*/}

            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Green*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*						<span className="fs-15 lh-12 m-r-6" style={{color: "#fa4251"}}>*/}
            {/*							<i className="zmdi zmdi-circle"></i>*/}
            {/*						</span>*/}

            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    Red*/}
            {/*                                </a>*/}
            {/*                            </li>*/}

            {/*                            <li className="p-b-6">*/}
            {/*						<span className="fs-15 lh-12 m-r-6" style={{color: "#aaa"}}>*/}
            {/*							<i className="zmdi zmdi-circle-o"></i>*/}
            {/*						</span>*/}

            {/*                                <a href="#" className="filter-link stext-106 trans-04">*/}
            {/*                                    White*/}
            {/*                                </a>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}

            {/*                    <div className="filter-col4 p-b-27">*/}
            {/*                        <div className="mtext-102 cl2 p-b-15">*/}
            {/*                            Tags*/}
            {/*                        </div>*/}

            {/*                        <div className="flex-w p-t-4 m-r--5">*/}
            {/*                            <a href="#"*/}
            {/*                               className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">*/}
            {/*                                Fashion*/}
            {/*                            </a>*/}

            {/*                            <a href="#"*/}
            {/*                               className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">*/}
            {/*                                Lifestyle*/}
            {/*                            </a>*/}

            {/*                            <a href="#"*/}
            {/*                               className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">*/}
            {/*                                Denim*/}
            {/*                            </a>*/}

            {/*                            <a href="#"*/}
            {/*                               className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">*/}
            {/*                                Streetstyle*/}
            {/*                            </a>*/}

            {/*                            <a href="#"*/}
            {/*                               className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">*/}
            {/*                                Crafts*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="row isotope-grid">*/}
            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-01.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Esprit Ruffle Shirt*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$16.64*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-02.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Herschel supply*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$35.31*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-03.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Only Check Trouser*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$25.50*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-04.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Classic Trench Coat*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$75.00*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-05.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Front Pocket Jumper*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$34.75*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-06.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Vintage Inspired Classic*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$93.20*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-07.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Shirt in Stretch Cotton*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$52.66*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-08.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Pieces Metallic Printed*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$18.96*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-09.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Converse All Star Hi Plimsolls*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$75.00*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-10.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Femme T-Shirt In Stripe*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$25.85*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-11.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Herschel supply*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$63.16*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-12.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Herschel supply*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$63.15*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-13.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                T-Shirt with Sleeve*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$18.49*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-14.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Pretty Little Thing*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$54.79*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-15.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Mini Silver Mesh Watch*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$86.85*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">*/}
            {/*                <div className="block2">*/}
            {/*                    <div className="block2-pic hov-img0">*/}
            {/*                        <img src="images/product-16.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                        <a href="#"*/}
            {/*                           className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">*/}
            {/*                            Quick View*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <div className="block2-txt flex-w flex-t p-t-14">*/}
            {/*                        <div className="block2-txt-child1 flex-col-l ">*/}
            {/*                            <a href="product-detail.html"*/}
            {/*                               className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">*/}
            {/*                                Square Neck Back*/}
            {/*                            </a>*/}

            {/*                            <span className="stext-105 cl3">*/}
            {/*						$29.64*/}
            {/*					</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="block2-txt-child2 flex-r p-t-3">*/}
            {/*                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">*/}
            {/*                                <img className="icon-heart1 dis-block trans-04"*/}
            {/*                                     src="images/icons/icon-heart-01.png" alt="ICON"/>*/}
            {/*                                <img className="icon-heart2 dis-block trans-04 ab-t-l"*/}
            {/*                                     src="images/icons/icon-heart-02.png" alt="ICON"/>*/}
            {/*                            </a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="flex-c-m flex-w w-full p-t-45">*/}
            {/*            <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">*/}
            {/*                Load More*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*Footer*/}
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

            {/*For Modal*/}
            {/*<div className="wrap-modal1 js-modal1 p-t-60 p-b-20">*/}
            {/*    <div className="overlay-modal1 js-hide-modal1"></div>*/}

            {/*    <div className="container">*/}
            {/*        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">*/}
            {/*            <button className="how-pos3 hov3 trans-04 js-hide-modal1">*/}
            {/*                <img src="images/icons/icon-close.png" alt="CLOSE"/>*/}
            {/*            </button>*/}

            {/*            <div className="row">*/}
            {/*                <div className="col-md-6 col-lg-7 p-b-30">*/}
            {/*                    <div className="p-l-25 p-r-30 p-lr-0-lg">*/}
            {/*                        <div className="wrap-slick3 flex-sb flex-w">*/}
            {/*                            <div className="wrap-slick3-dots"></div>*/}
            {/*                            <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>*/}

            {/*                            <div className="slick3 gallery-lb">*/}
            {/*                                <div className="item-slick3" data-thumb="images/product-detail-01.jpg">*/}
            {/*                                    <div className="wrap-pic-w pos-relative">*/}
            {/*                                        <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"*/}
            {/*                                           href="images/product-detail-01.jpg">*/}
            {/*                                            <i className="fa fa-expand"></i>*/}
            {/*                                        </a>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="item-slick3" data-thumb="images/product-detail-02.jpg">*/}
            {/*                                    <div className="wrap-pic-w pos-relative">*/}
            {/*                                        <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"*/}
            {/*                                           href="images/product-detail-02.jpg">*/}
            {/*                                            <i className="fa fa-expand"></i>*/}
            {/*                                        </a>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="item-slick3" data-thumb="images/product-detail-03.jpg">*/}
            {/*                                    <div className="wrap-pic-w pos-relative">*/}
            {/*                                        <img src="images/product-detail-03.jpg" alt="IMG-PRODUCT"/>*/}

            {/*                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"*/}
            {/*                                           href="images/product-detail-03.jpg">*/}
            {/*                                            <i className="fa fa-expand"></i>*/}
            {/*                                        </a>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="col-md-6 col-lg-5 p-b-30">*/}
            {/*                    <div className="p-r-50 p-t-5 p-lr-0-lg">*/}
            {/*                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">*/}
            {/*                            Lightweight Jacket*/}
            {/*                        </h4>*/}

            {/*                        <span className="mtext-106 cl2">*/}
			{/*					$58.79*/}
			{/*				</span>*/}

            {/*                        <p className="stext-102 cl3 p-t-23">*/}
            {/*                            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris*/}
            {/*                            consequat ornare feugiat.*/}
            {/*                        </p>*/}

            {/*                        <div className="p-t-33">*/}
            {/*                            <div className="flex-w flex-r-m p-b-10">*/}
            {/*                                <div className="size-203 flex-c-m respon6">*/}
            {/*                                    Size*/}
            {/*                                </div>*/}

            {/*                                <div className="size-204 respon6-next">*/}
            {/*                                    <div className="rs1-select2 bor8 bg0">*/}
            {/*                                        <select className="js-select2" name="time">*/}
            {/*                                            <option>Choose an option</option>*/}
            {/*                                            <option>Size S</option>*/}
            {/*                                            <option>Size M</option>*/}
            {/*                                            <option>Size L</option>*/}
            {/*                                            <option>Size XL</option>*/}
            {/*                                        </select>*/}
            {/*                                        <div className="dropDownSelect2"></div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}

            {/*                            <div className="flex-w flex-r-m p-b-10">*/}
            {/*                                <div className="size-203 flex-c-m respon6">*/}
            {/*                                    Color*/}
            {/*                                </div>*/}

            {/*                                <div className="size-204 respon6-next">*/}
            {/*                                    <div className="rs1-select2 bor8 bg0">*/}
            {/*                                        <select className="js-select2" name="time">*/}
            {/*                                            <option>Choose an option</option>*/}
            {/*                                            <option>Red</option>*/}
            {/*                                            <option>Blue</option>*/}
            {/*                                            <option>White</option>*/}
            {/*                                            <option>Grey</option>*/}
            {/*                                        </select>*/}
            {/*                                        <div className="dropDownSelect2"></div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}

            {/*                            <div className="flex-w flex-r-m p-b-10">*/}
            {/*                                <div className="size-204 flex-w flex-m respon6-next">*/}
            {/*                                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">*/}
            {/*                                        <div*/}
            {/*                                            className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">*/}
            {/*                                            <i className="fs-16 zmdi zmdi-minus"></i>*/}
            {/*                                        </div>*/}

            {/*                                        <input className="mtext-104 cl3 txt-center num-product"*/}
            {/*                                               type="number" name="num-product" value="1"/>*/}

            {/*                                        <div*/}
            {/*                                            className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">*/}
            {/*                                            <i className="fs-16 zmdi zmdi-plus"></i>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}

            {/*                                    <button*/}
            {/*                                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">*/}
            {/*                                        Add to cart*/}
            {/*                                    </button>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <div className="flex-w flex-m p-l-100 p-t-40 respon7">*/}
            {/*                            <div className="flex-m bor9 p-r-10 m-r-11">*/}
            {/*                                <a href="#"*/}
            {/*                                   className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"*/}
            {/*                                   data-tooltip="Add to Wishlist">*/}
            {/*                                    <i className="zmdi zmdi-favorite"></i>*/}
            {/*                                </a>*/}
            {/*                            </div>*/}

            {/*                            <a href="#"*/}
            {/*                               className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"*/}
            {/*                               data-tooltip="Facebook">*/}
            {/*                                <i className="fa fa-facebook"></i>*/}
            {/*                            </a>*/}

            {/*                            <a href="#"*/}
            {/*                               className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"*/}
            {/*                               data-tooltip="Twitter">*/}
            {/*                                <i className="fa fa-twitter"></i>*/}
            {/*                            </a>*/}

            {/*                            <a href="#"*/}
            {/*                               className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"*/}
            {/*                               data-tooltip="Google Plus">*/}
            {/*                                <i className="fa fa-google-plus"></i>*/}
            {/*                            </a>*/}
            {/*                            <div id="root"></div>*/}

            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>

    );
}

export default App;
