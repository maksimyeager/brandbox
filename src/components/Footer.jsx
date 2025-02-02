import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">Səhifələr</h2>
                        <ul className="footer__list">
                            <li>
                                <Link to={"/about-us"}>Haqqımızda</Link>
                            </li>
                            <li>
                                <Link to={"/partners"}>Partnyorlar</Link>
                            </li>
                            <li>
                                <Link to={"/mission"}>Missiyamız</Link>
                            </li>
                            <li>
                                <Link to={"/products"}>Məhsullarımız</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">Contact</h2>
                        <ul className="footer__list">
                            <li>
                                <Link className="footer__contact-link">
                                    <FaPhoneAlt size={16} />
                                    <span>+994515240516</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="footer__contact-link">
                                    <FaEnvelope size={16} />
                                    <span>info@brandbox.az</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="footer__socials">
                            <li>
                                <Link>
                                    <FaFacebookF size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaInstagram size={28} />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaLinkedinIn size={24} />
                                </Link>
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
