import Banner from "../components/Banner";
import aboutCompanyImg from "../assets/image.png";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation("global");

    return (
        <>
            <Banner title={t("header.about-us")} />
            <div className="about-us">
                <div className="container">
                    <div className="about-us-info">
                        <h2 className="title-1">{t("about-us.about-info")}</h2>
                        <div className="about-us-info__desc">
                            <p>{t("about-us.about-info-desc-1")}</p>
                            <p>{t("about-us.about-info-desc-2")}</p>
                        </div>
                    </div>

                    <div className="about-company">
                        <div className="about-company-img">
                            <img src={aboutCompanyImg} alt="" />
                        </div>
                        <div className="about-company-info">
                            <h2 className="title-1">Shabnam Sarab</h2>
                            <p>{t("about-us.shabnam-sarab-desc-1")}</p>
                            <p>{t("about-us.shabnam-sarab-desc-2")}</p>
                        </div>
                    </div>
                    <div className="about-us-achivments">
                        <h2 className="title-1">
                            {t("about-us.ambition-title")}
                        </h2>
                        <div className="achivments__wrapper">
                            <div className="achivment">
                                <p>
                                    <span>
                                        {t("about-us.ambition-1-title")}
                                    </span>
                                    {t("about-us.ambition-1")}
                                </p>
                            </div>
                            <div className="achivment">
                                <p>
                                    <span>
                                        {t("about-us.ambition-2-title")}
                                    </span>
                                    {t("about-us.ambition-2")}
                                </p>
                            </div>
                            <div className="achivment">
                                <p>
                                    <span>
                                        {t("about-us.ambition-3-title")}
                                    </span>
                                    {t("about-us.ambition-3")}
                                </p>
                            </div>
                            <div className="achivment">
                                <p>
                                    <span>
                                        {t("about-us.ambition-4-title")}
                                    </span>
                                    {t("about-us.ambition-4")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
