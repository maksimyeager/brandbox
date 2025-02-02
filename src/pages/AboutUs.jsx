import Banner from "../components/Banner";
import aboutCompanyImg from "../assets/image.png";
const AboutUs = () => {
    return (
        <>
            <Banner title={"Haqqımızda"} />
            <div className="about-us">
                <div className="container">
                    <div className="about-us-info">
                        <h2 className="title-1">
                            Sed ut perspiciatis unde omnis
                        </h2>
                        <div className="about-us-info__desc">
                            <p>
                                At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>

                    <div className="about-company">
                        <div className="about-company-img">
                            <img src={aboutCompanyImg} alt="" />
                        </div>
                        <div className="about-company-info">
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
                    </div>
                    <div className="about-us-achivments">
                        <h2 className="title-1">Lorem ipsum dolor sit amet</h2>
                        <div className="achivments__wrapper">
                            <div className="achivment">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="achivment">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae abwert.
                                </p>
                            </div>
                            <div className="achivment">
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti quos dolores et quas molestias
                                    excepturi sint.
                                </p>
                            </div>
                            <div className="achivment">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
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
