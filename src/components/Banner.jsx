import PropTypes from "prop-types";

const Banner = ({ title }) => {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <h1 className="title-1">{title}</h1>
            </div>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Banner;
