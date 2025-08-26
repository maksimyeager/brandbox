import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Banner from "../components/Banner";
import B2CPartnersSwiper from "../components/B2CPartnersSwiper";
import B2BPartnersSwiper from "../components/B2BPartnersSwiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Partners = () => {
    const { t } = useTranslation("global");

    useEffect(() => {
        document.title = `${t("header.partners")} - Brandbox`;
    }, [t]);

    return (
        <>
            <Banner title={t("header.partners")} />
            <div className="partners">
                <section className="b2c-partners">
                    <div className="container">
                        <h1 className="title-1">B2C</h1>
                        <div className="b2c-partners__swiper">
                            <button className="b2c-partners-prev partners-swiper-btn">
                                <FaChevronLeft color="#fff" size={20} />
                            </button>
                            <B2CPartnersSwiper />
                            <button className="b2c-partners-next partners-swiper-btn">
                                <FaChevronRight color="#fff" size={20} />
                            </button>
                        </div>
                    </div>
                </section>
                <section className="b2b-partners">
                    <div className="container">
                        <h1 className="title-1">B2B</h1>
                        <div className="b2b-partners__swiper">
                            <button className="b2b-partners-prev partners-swiper-btn">
                                <FaChevronLeft color="#fff" size={20} />
                            </button>
                            <B2BPartnersSwiper />
                            <button className="b2b-partners-next partners-swiper-btn">
                                <FaChevronRight color="#fff" size={20} />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Partners;
