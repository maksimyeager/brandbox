import image from "../assets/image.png";
import icon from "../assets/Group 13.svg";
import icon2 from "../assets/Group 14.svg";
import icon3 from "../assets/Group 15.svg";
import bannerImg from "../assets/banner.png";
import { Link } from "react-router-dom";
import PartnersSwiper from "../components/PartnersSwiper";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("global");
    return (
        <>
            <div className="home-banner">
                <div className="home-banner__wrapper">
                    <div className="container">
                        <div className="home-banner__info">
                            <h1>
                                {t("home-banner.title-1")}
                                <span> {t("home-banner.brandbox")}</span>
                            </h1>
                            <Link
                                to={"/about-us"}
                                className="link-1"
                                data-text={t("button.more")}
                            >
                                {t("button.more")}
                            </Link>
                        </div>
                        <div className="home-banner__img">
                            <div className="home-banner__img--overlay"></div>
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="section section--about-us">
                <div className="container">
                    <h2 className="title-1">{t("home.about-us")}</h2>
                    <div className="about-us__wrapper">
                        <div className="about-us__info">
                            <p>{t("home.about-us-desc")}</p>
                            <Link
                                to={"/about-us"}
                                className="link-2"
                                data-text={t("button.more")}
                            >
                                {t("button.more")}
                            </Link>
                        </div>
                        <div className="about-us__image">
                            <img src={image} alt="About Us" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--partners">
                <h2 className="title-1">{t("home.partners")}</h2>
                <p className="section__subtitle">{t("home.partners-desc")}</p>
                <div className="partners__wrapper">
                    <div className="partners__slider">
                        <PartnersSwiper />
                    </div>
                </div>
            </section>{" "}
            <section className="section section--mission">
                <div className="container">
                    <h2 className="title-1">{t("home.mission")}</h2>
                    <p className="section__subtitle">
                        {t("home.mission-desc")}
                    </p>
                    <div className="mission__wrapper">
                        <div className="mission">
                            <div className="mission__img">
                                <img src={icon} alt="" />
                            </div>
                            <h2 className="mission__title">
                                {t("home.mission-block-title")}
                            </h2>
                            <p className="mission__desc">
                                {t("home.mission-block-desc")}
                            </p>
                        </div>
                        <div className="mission">
                            <div className="mission__img">
                                <img src={icon2} alt="" />
                            </div>
                            <h2 className="mission__title">
                                {t("home.vision-block-title")}
                            </h2>
                            <p className="mission__desc">
                                {t("home.vision-block-desc")}
                            </p>
                        </div>
                        <div className="mission">
                            <div className="mission__img">
                                <img src={icon3} alt="" />
                            </div>
                            <h2 className="mission__title">
                                {t("home.values-block-title")}
                            </h2>
                            <p className="mission__desc">
                                {t("home.values-block-desc")}
                            </p>
                        </div>
                    </div>
                    <Link
                        to={"/mission"}
                        className="link-2"
                        data-text={t("button.more")}
                    >
                        {t("button.more")}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
