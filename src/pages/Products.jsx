import Banner from "../components/Banner";
import productImg from "../assets/product.png";
import productImg2 from "../assets/product-2.png";
import productImg3 from "../assets/product-3.png";
import productImg4 from "../assets/product-4.png";
import productImg5 from "../assets/product-5.png";

const products = [
    {
        title: "Qəmzə",
        desc: "Təbii kərə yağı",
        imageUrl: productImg,
    },
    {
        title: "Netice",
        desc: "Təbii kərə yağı",
        imageUrl: productImg2,
    },
    {
        title: "Asnaf",
        desc: "Təbii kərə yağı",
        imageUrl: productImg3,
    },
    {
        title: "Sarzendeh",
        desc: "Təbii kərə yağı",
        imageUrl: productImg4,
    },
    {
        title: "Vənək ",
        desc: "Təbii kərə yağı",
        imageUrl: productImg5,
    },
];

const Products = () => {
    return (
        <>
            <Banner title="Məhsullarımız" />
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
