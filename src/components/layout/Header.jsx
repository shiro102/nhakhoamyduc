import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Translation } from "react-i18next";
import ChangeLang from "../ChangeLang";
import ThemeToggle from "../ThemeToggle";
import { checkAuth } from "../../functions/checkAuth";

const NAV_ITEMS = [
  { path: "/", key: "homepage" },
  { path: "/pricing", key: "price" },
  { path: "/about", key: "about" },
];

const commonStyles = {
  fontFamily: "Times New Roman",
};

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const response = await checkAuth();
      setIsAuthenticated(response);
    };
    checkAuthStatus();
  }, []);

  return (
    <header>
      <div className="container-menu-desktop">
        {/* Top bar */}
        <div className="top-bar">
          <div className="flex justify-evenly md:justify-end h-full w-full container">
            <div className="flex flex-wrap h-full">
              <Translation>
                {(t) =>
                  !isAuthenticated ? (
                    <Link
                      to="/login"
                      className="flex items-center justify-center transition-all duration-300 text-[#b5b5b5] hover:text-[#6c7ae0] border-x-[0.5px] border-[#787878] px-[29px] max-w-[200px]"
                      style={commonStyles}
                    >
                      {t("account")}
                    </Link>
                  ) : (
                    <Link
                      to="/admin"
                      className="flex items-center justify-center transition-all duration-300 text-[#b5b5b5] hover:text-[#6c7ae0] border-x-[0.5px] border-[#787878] px-[29px] max-w-[200px]"
                      style={commonStyles}
                    >
                      {t("account")}
                    </Link>
                  )
                }
              </Translation>

              <Translation>
                {(t) => (
                  <span
                    className="flex items-center justify-center transition-all duration-300 text-[#b5b5b5] pl-[29px] pr-[10px] max-w-[140px]"
                    style={commonStyles}
                  >
                    {t("language")}:
                  </span>
                )}
              </Translation>
              <div className="flex items-center justify-center">
                <ChangeLang />
                <ThemeToggle className="ml-2 mr-[17px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container flex justify-center">
            <Link to="/" className="logo">
              <img src="https://drive.google.com/thumbnail?id=1sER64F-iNSy5IfluXuQV0WLLH_lGpaEP&sz=w500" alt="IMG-LOGO" />
            </Link>
            <div className="menu-desktop">
              <ul className="main-menu">
                <Translation>
                  {(t) => (
                    <>
                      {NAV_ITEMS.map(({ path, key }) => (
                        <li key={path}>
                          <NavLink
                            className="main-menu-navlink"
                            exact
                            to={path}
                            style={commonStyles}
                          >
                            <span className="text-[20px]">{t(key)}</span>
                          </NavLink>
                        </li>
                      ))}
                    </>
                  )}
                </Translation>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="header-container"></div>
      <div>
        <picture>
          <source
            media="(max-width:900px)"
            srcSet="https://drive.google.com/thumbnail?id=1s1z91cqRGWmplgosdnp98XKN5g-VOCid&sz=w2000"
          />
          <img
            width="100%"
            height="20%"
            src="https://drive.google.com/thumbnail?id=1oxEnTvS6uTGKE7_--TVS3iP6eDMoMnH6&sz=w2000"
            alt="IMG"
          />
        </picture>
      </div>
    </header>
  );
};

export default Header;
