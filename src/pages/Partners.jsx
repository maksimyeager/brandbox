import Banner from "../components/Banner";
import { useTranslation } from "react-i18next";
import { partners } from "../services/partners";

const Partners = () => {
    const { t } = useTranslation("global");

    return (
        <>
            <Banner title={t("header.partners")} />
            <div className="partners">
                <div className="container">
                    {partners.map((item, index) => (
                        <div key={index} className="partner">
                            <img src={item.imgUrl} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Partners;
