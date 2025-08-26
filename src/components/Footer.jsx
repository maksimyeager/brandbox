import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/brandbox-2.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const { t } = useTranslation("global");

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="Brandox Logo" />
                        </Link>
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">
                            {t("footer.pages")}
                        </h2>
                        <ul className="footer__list">
                            <li>
                                <Link to={"/about-us"}>
                                    {t("footer.about-us")}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/partners"}>
                                    {t("footer.partners")}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/mission"}>
                                    {t("footer.mission")}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/products"}>
                                    {t("footer.products")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">
                            {t("footer.contact-us")}
                        </h2>
                        <ul className="footer__list">
                            <li>
                                <a
                                    href="tel:+994502211872"
                                    className="footer__contact-link"
                                >
                                    <FaPhoneAlt size={16} />
                                    <span>+994 50 221 18 72</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@brandbox.az"
                                    className="footer__contact-link"
                                >
                                    <FaEnvelope size={16} />
                                    <span>info@brandbox.az</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="footer__socials">
                            <li>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                >
                                    <FaFacebookF size={24} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                >
                                    <FaInstagram size={28} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                >
                                    <FaLinkedinIn size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="copyright">
                    Copyright © 2025 BrandBox by{" "}
                    <a href="https://moderndigital.az/">Modern Digital</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
