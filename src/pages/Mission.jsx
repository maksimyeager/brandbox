import Banner from "../components/Banner";
import icon from "../assets/Group 13.svg";
import icon2 from "../assets/Group 14.svg";
import icon3 from "../assets/Group 15.svg";
import { useTranslation } from "react-i18next";

import aboutCompanyImg from "../assets/about-company.png";

const Mission = () => {
    const { t } = useTranslation("global");

    return (
        <>
            <Banner title={t("header.mission")} />
            <div className="mission">
                <div className="container">
                    <h2 className="title-1">{t("mission.title")}</h2>
                    <p className="mission__desc">{t("mission.desc")}</p>
                    <div className="mission__wrapper">
                        <div className="mission__block">
                            <div className="mission__block-img">
                                <img src={icon} alt="" />
                            </div>
                            <div className="mission__block-title">
                                {t("mission.mission-block-title")}
                            </div>
                            <div className="mission__block-desc">
                                {t("mission.mission-block-desc")}
                            </div>
                        </div>
                        <div className="mission__block">
                            <div className="mission__block-img">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="mission__block-title">
                                {t("mission.vision-block-title")}
                            </div>
                            <div className="mission__block-desc">
                                {t("mission.vision-block-desc")}
                            </div>
                        </div>
                        <div className="mission__block">
                            <div className="mission__block-img">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="mission__block-title">
                                {t("mission.values-block-title")}
                            </div>
                            <div className="mission__block-desc">
                                {t("mission.values-block-desc")}
                            </div>
                        </div>
                    </div>
                    <div className="mission__about-company">
                        <div className="mission__about-company-info">
                            <h2 className="title-1">{t("home.about-us")}</h2>
                            <p>{t("about-us.about-info-desc-1")}</p>
                        </div>
                        <div className="mission__about-company-img">
                            <img src={aboutCompanyImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mission;
