import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/swiper-bundle.css";

const images = [
  "https://i.ibb.co/5Yj0dRf/bingo-4.jpg",
  "https://i.ibb.co/3N8ksc4/bingo-3.jpg",
  "https://i.ibb.co/2jvTnJc/bingo-5.jpg",
  "https://i.ibb.co/tXpPX25/bingo-6.jpg",
  "https://i.ibb.co/wLH3qdq/bingo-2.jpg",
];

function CoverflowSlider() {
  return (
    <div className="w-full mx-auto my-8"> {/* Set container to full width */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        pagination={{
          clickable: true, // Makes the pagination dots clickable
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay module
        className="w-full rounded-lg shadow-lg"> {/* Set Swiper to full width */}
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-lg" // Use relative units for height
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CoverflowSlider;