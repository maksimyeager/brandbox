import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Banner from "../components/Banner";
import Form from "../components/Form";

import phoneSvg from "../assets/icons/phone.svg";
import envelopeSvg from "../assets/icons/envelope.svg";

const ContactUs = () => {
    const { t } = useTranslation("global");

    useEffect(() => {
        document.title = `${t("header.contact-us")} - Brandbox`;
    }, [t]);

    return (
        <>
            <Banner title={t("header.contact-us")} />
            <div className="contact-us">
                <div className="container">
                    <div className="contact-us__form">
                        <Form />
                    </div>
                    <div className="contact-us__info">
                        <div className="contact-us__info-block contact-us__info-block--1">
                            <h2 className="title-1">{t("contact-us.title")}</h2>
                            <p>{t("contact-us.desc")}</p>
                        </div>
                        <div className="contact-us__info-block contact-us__info-block--2">
                            <h2>{t("contact-us.mail")}</h2>
                            <ul>
                                <li>
                                    <a href="mailto:info@brandbox.az">
                                        <img src={envelopeSvg} alt="Envelope" />
                                        <span>info@brandbox.az</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:jamilmehdiyev@brandbox.az">
                                        <img src={envelopeSvg} alt="Envelope" />
                                        <span>jamilmehdiyev@brandbox.az</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-us__info-block contact-us__info-block--3">
                            <h2>{t("contact-us.phone")}</h2>
                            <ul>
                                <li>
                                    <a href="tel:+994502211872">
                                        <img src={phoneSvg} alt="Phone" />
                                        <span>+994 50 221 18 72</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+994505026602">
                                        <img src={phoneSvg} alt="Phone" />
                                        <span>+994 50 502 66 02</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-us__info-block contact-us__info-block--4">
                            <h2>{t("contact-us.socials")}</h2>
                            <ul className="contact-us__socials">
                                <li>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                    >
                                        <FaFacebookF size={24} color="#fff" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                    >
                                        <FaInstagram size={28} color="#fff" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                    >
                                        <FaLinkedinIn size={24} color="#fff" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
