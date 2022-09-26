import React, { Fragment } from 'react';
import { Link, Outlet, Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import Admin from "../components/Admin";
import Home from "../components/Home";
import Pricing from "../components/Pricing";
import NoMatch from "../components/NoMatch";
import useScript from "../functions/useScript";
import useLink from "../functions/useLink";

const Layout = () => {

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
        <Fragment>
            <Header/>
            <Outlet></Outlet>
        </Fragment>
    );
};
export default Layout;