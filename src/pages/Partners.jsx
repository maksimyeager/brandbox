import Banner from "../components/Banner";

import partner from "../assets/partner.jpg";

const Partners = () => {
    return (
        <>
            <Banner title={"Partners"} />
            <div className="partners">
                <div className="container">
                    {new Array(20).fill(0).map((item, index) => (
                        <div key={index} className="partner">
                            <img src={partner} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Partners;
