import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { partners } from "../services/partners";

const HomePartnersSwiper = () => {
    return (
        <Swiper
            className="partners-swiper"
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
                320: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5,
                },
                900: {
                    slidesPerView: 6,
                },
                1024: {
                    slidesPerView: 7,
                },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            effect="fade"
            modules={[Navigation, Autoplay]}
        >
            {partners.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item.imgUrl} alt={item.name} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomePartnersSwiper;
