const scriptTextList = ["", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "$(\".js-select2\").each(function(){\n" +
    "        $(this).select2({\n" +
    "          minimumResultsForSearch: 20,\n" +
    "          dropdownParent: $(this).next('.dropDownSelect2')\n" +
    "        });\n" +
    "      })",
    "$('.parallax100').parallax100();",
    "$('.gallery-lb').each(function() { // the containers for all your galleries\n" +
    "        $(this).magnificPopup({\n" +
    "          delegate: 'a', // the selector for gallery item\n" +
    "          type: 'image',\n" +
    "          gallery: {\n" +
    "            enabled:true\n" +
    "          },\n" +
    "          mainClass: 'mfp-fade'\n" +
    "        });\n" +
    "      });",
    "$('.js-addwish-b2').on('click', function(e){\n" +
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
    "      });",
    " $('.js-pscroll').each(function(){\n" +
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
    "      });"

];

export default scriptTextList;