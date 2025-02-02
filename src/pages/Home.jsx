import image from "../assets/image.png";
import icon from "../assets/Group 13.svg";
import icon2 from "../assets/Group 14.svg";
import icon3 from "../assets/Group 15.svg";
import { Link } from "react-router-dom";
import PartnersSwiper from "../components/PartnersSwiper";

const Home = () => {
    return (
        <>
            <div className="home-banner">
                <div className="home-banner__wrapper">
                    <div className="container">
                        <h1>
                            Ən yüksək keyfiyyət <br /> <span>BrandBox-da!</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed <br /> do eiusmod tempor incididunt ut
                            labore et dolore magna <br /> aliqua. Ut enim ad
                            minim venia...
                        </p>
                        <Link to={"/about-us"} className="link-1">
                            Ətraflı
                        </Link>
                    </div>
                </div>
            </div>
            <section className="section section--about-us">
                <div className="container">
                    <h2 className="title-1">Şirkətimiz Haqqında</h2>
                    <div className="about-us__wrapper">
                        <div className="about-us__info">
                            <p>
                                Voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo....
                            </p>
                            <Link to={"/about-us"} className="link-2">
                                Ətraflı
                            </Link>
                        </div>
                        <div className="about-us__image">
                            <img src={image} alt="About Us" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--partners">
                <h2 className="title-1">Bizim Partnyorlarımız</h2>
                <p className="section__subtitle">
                    “Brandbox” MMC olaraq, respublikada tanınmış <br />
                    şirkətlər ilə partnyorluq edirik.
                </p>
                <div className="partners__wrapper">
                    <div className="partners__slider">
                        <PartnersSwiper />
                    </div>
                </div>
            </section>{" "}
            <section className="section section--mission">
                <div className="container">
                    <h2 className="title-1">Missiyamız və Vizyonumuz</h2>
                    <p className="section__subtitle">
                        Davamlı inkişaf və yenilik üçün yol <br /> xəritəmiz
                    </p>
                    <div className="mission__wrapper">
                        <div className="mission">
                            <div className="mission__img">
                                <img src={icon} alt="" />
                            </div>
                            <h2 className="mission__title">Missiyamız</h2>
                            <p className="mission__desc">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam...
                            </p>
                        </div>
                        <div className="mission">
                            <div className="mission__img">
                                <img src={icon2} alt="" />
                            </div>
                            <h2 className="mission__title">Vizyonumuz</h2>
                            <p className="mission__desc">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam...
                            </p>
                        </div>
                        <div className="mission">
                            <div className="mission__img">
                                <img src={icon3} alt="" />
                            </div>
                            <h2 className="mission__title">Dəyərlərimiz</h2>
                            <p className="mission__desc">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam...
                            </p>
                        </div>
                    </div>
                    <Link to={"/mission"} className="link-2">
                        Ətraflı
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
