import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo-2.png";
import burgerSvg from "../assets/burger.svg";
import LanguageSelector from "./LanguageSelector";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    const { t } = useTranslation("global");
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {" "}
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="Brandbox Logo" />
                        </Link>
                    </div>
                    <ul className="header__list">
                        <li>
                            <Link to={"/about-us"}>{t("header.about-us")}</Link>
                        </li>
                        <li>
                            <Link to={"/partners"}>{t("header.partners")}</Link>
                        </li>
                        <li>
                            <Link to={"/mission"}>{t("header.mission")}</Link>
                        </li>
                        <li>
                            <Link to={"/products"}>{t("header.products")}</Link>
                        </li>
                    </ul>
                    <div className="header__settings">
                        <LanguageSelector />
                        <button
                            className="header__btn"
                            onClick={() => setOpen(true)}
                        >
                            <img src={burgerSvg} alt="" />
                        </button>
                    </div>
                </div>
            </header>
            <MobileNavbar open={open} onClose={handleClose} />
        </>
    );
};

export default Header;
