import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  className?: string;
}

export function Carousel({ className = "" }: CarouselProps) {
  const images = [
    "../../public/we-1.jpg",
    "../../public/we-2.jpg",
    "../../public/we-3.jpg",
    "../../public/we-4.jpg",
  ];

  return (
    <div className={`w-full ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg shadow-xl bg-transparent"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-64 md:h-80 lg:h-96 bg-gray-200 overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
