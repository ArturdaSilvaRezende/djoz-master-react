import * as C from "./style";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EventList } from "./eventsList";

export const EventsCarousel = () => {
  return (
    <C.EventsCarousel>
      <div className="events__title">
        <h1>Upcomigs Events</h1>

        <div>
          <button className="swiper-button-prev">
            <BsChevronLeft />
          </button>
          <button className="swiper-button-next">
            <BsChevronRight />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          599: {
            slidesPerView: 1,
          },

          600: {
            slidesPerView: 2,
          },

          993: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {EventList.map((item) => (
          <SwiperSlide key={item.artist}>
            <figure>
              <img src={item.img} alt={item.artist} />
              <figcaption>
                <p>{item.EventsData}</p>
                <h2>{item.artist}</h2>
                <p>
                  <FaMapMarkerAlt />
                  Funkhaus Berlin, Berlin, Germany
                </p>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </C.EventsCarousel>
  );
};
