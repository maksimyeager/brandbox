import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { partners } from "../services/partners";
import { useTranslation } from "react-i18next";

const B2CPartnersSwiper = () => {
    const { t } = useTranslation("global");
    return (
        <Swiper
            className="partners-swiper"
            spaceBetween={60}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            effect="fade"
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{ clickable: true }}
            navigation={{
                nextEl: ".b2c-partners-next",
                prevEl: ".b2c-partners-prev",
            }}
        >
            {partners
                .filter((item) => item.type === "b2c")
                .map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="b2b-partners__slide">
                            <div className="b2b-partners__slide-image">
                                <img src={item.imgUrl} alt={item.name} />
                            </div>
                            <div className="b2b-partners__slide-info">
                                <h2>{item.name}</h2>
                                {item.descKey && <p>{t(item.descKey)}</p>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default B2CPartnersSwiper;
