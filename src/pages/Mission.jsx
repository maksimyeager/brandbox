import Banner from "../components/Banner";
import icon from "../assets/Group 13.svg";
import icon2 from "../assets/Group 14.svg";
import icon3 from "../assets/Group 15.svg";
import aboutCompanyImg from "../assets/about-company.png";

const Mission = () => {
    return (
        <>
            <Banner title="Missiamiz" />
            <div className="mission">
                <div className="container">
                    <h2 className="title-1">Sed ut perspiciatis</h2>
                    <p className="mission__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod <br /> tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <div className="mission__wrapper">
                        <div className="mission__block">
                            <div className="mission__block-img">
                                <img src={icon} alt="" />
                            </div>
                            <div className="mission__block-title">
                                Lorem Ipsum <br /> Dolor
                            </div>
                            <div className="mission__block-desc">
                                We offer the finest resorts and golf <br />
                                courses in the world and customize <br /> each
                                and every trip.
                            </div>
                        </div>
                        <div className="mission__block">
                            <div className="mission__block-img">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="mission__block-title">
                                Tempor Incididunt <br /> Ut Labore
                            </div>
                            <div className="mission__block-desc">
                                Of our clients would travel <br /> with us again
                            </div>
                        </div>
                        <div className="mission__block">
                            <div className="mission__block-img">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="mission__block-title">
                                Sed Do <br /> Eiusmod
                            </div>
                            <div className="mission__block-desc">
                                We’ve been providing the absolute <br /> highest
                                level of service to our <br /> golfing clientele
                                for decades.
                            </div>
                        </div>
                    </div>
                    <div className="mission__about-company">
                        <div className="mission__about-company-info">
                            <h2 className="title-1">About our company</h2>
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
                                beatae vitae dicta sunt explicabo. At vero eos
                                et accusamus et iusto odio dignissimos ducimus
                                qui blanditiis praesentium voluptatum deleniti
                                atque corrupti quos dolores et quas molestias
                                exceptur.
                            </p>
                        </div>
                        <div className="mission__about-company-img">
                            <img src={aboutCompanyImg} alt="" />
                        </div>
                    </div>
                    .
                </div>
            </div>
        </>
    );
};

export default Mission;
