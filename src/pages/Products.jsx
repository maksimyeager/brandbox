import { useEffect } from "react";
import Banner from "../components/Banner";
import dehgah from "../assets/products/dehgah.png";
import venek from "../assets/products/venek.png";
import mrGolden from "../assets/products/mr-golden.png";
import zanossi from "../assets/products/zanossi.png";
import qemze from "../assets/products/qemze.png";
import tedai from "../assets/products/tedai.png";
import viderno from "../assets/products/viderno.png";
import millikano from "../assets/products/millikano.png";
import caygah from "../assets/products/caygah.png";
import elay from "../assets/products/elay.png";
import netice from "../assets/products/netice.png";
import qenimet from "../assets/products/qenimet.png";

import { useTranslation } from "react-i18next";

const Products = () => {
    const { t } = useTranslation("global");

    useEffect(() => {
        document.title = `${t("header.products")} - Brandbox`;
    }, [t]);

    const products = [
        {
            title: "Dehgah",
            desc: t("products.desc"),
            imageUrl: dehgah,
        },
        {
            title: "Vənək",
            desc: t("products.desc"),
            imageUrl: venek,
        },
        {
            title: "Mr.Golden",
            desc: t("products.desc"),
            imageUrl: mrGolden,
        },
        {
            title: "Zanossi",
            desc: t("products.desc"),
            imageUrl: zanossi,
        },
        {
            title: "Qəmzə",
            desc: t("products.desc"),
            imageUrl: qemze,
        },
        {
            title: "Tedai",
            desc: t("products.desc"),
            imageUrl: tedai,
        },
        {
            title: "Viderno",
            desc: t("products.desc"),
            imageUrl: viderno,
        },
        {
            title: "Millikano",
            desc: t("products.desc"),
            imageUrl: millikano,
        },
        {
            title: "Caygah",
            desc: t("products.desc"),
            imageUrl: caygah,
        },
        {
            title: "Elay",
            desc: t("products.desc"),
            imageUrl: elay,
        },
        {
            title: "Netice",
            desc: t("products.desc"),
            imageUrl: netice,
        },
        {
            title: "Qənimət",
            desc: t("products.desc"),
            imageUrl: qenimet,
        },
    ];
    return (
        <>
            <Banner title={t("header.products")} />
            <div className="products">
                <div className="container">
                    <div className="products__wrapper">
                        {products.map((product, index) => {
                            return (
                                <div key={index} className="product">
                                    <div className="product__img">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.title}
                                        />
                                    </div>
                                    <div className="product__info">
                                        <h2 className="product__title">
                                            {product.title}
                                        </h2>
                                        <p className="product__desc">
                                            {product.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
