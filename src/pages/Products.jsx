import Banner from "../components/Banner";
import productImg from "../assets/product.png";
import productImg2 from "../assets/product-2.png";
import productImg3 from "../assets/product-3.png";
import productImg4 from "../assets/product-4.png";
import productImg5 from "../assets/product-5.png";
import { useTranslation } from "react-i18next";

const Products = () => {
    const { t } = useTranslation("global");

    const products = [
        {
            title: "Qəmzə",
            desc: t("products.desc"),
            imageUrl: productImg,
        },
        {
            title: "Netice",
            desc: t("products.desc"),
            imageUrl: productImg2,
        },
        {
            title: "Asnaf",
            desc: t("products.desc"),
            imageUrl: productImg3,
        },
        {
            title: "Sarzendeh",
            desc: t("products.desc"),
            imageUrl: productImg4,
        },
        {
            title: "Vənək ",
            desc: t("products.desc"),
            imageUrl: productImg5,
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
