import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Autoplay } from 'swiper/modules'; // Include Autoplay module
import 'swiper/css';
import 'swiper/css/thumbs';
import { gsap } from 'gsap';

function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const animateText = () => {
      gsap.fromTo(
        '.hero-text',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
      );
    };

    animateText();
  }, []);

  const slides = [
    { id: 1, src: 'vid1.mp4', caption: 'Discover Delicious Recipes', thumbnail: 'pic1.jpg' },
    { id: 2, src: 'vid2.mp4', caption: 'Share Your Culinary Creations', thumbnail: 'pic2.jpg' },
    { id: 3, src: 'vid3.mp4', caption: 'Learn from the Best Chefs', thumbnail: 'pic3.jpg' },
  ];

  return (
    <section className="hero-section m-4 neumorphic">
      {/* Main Swiper */}
      <Swiper
        modules={[Thumbs, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000, // 5 seconds delay for automatic slide transition
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={() => {
          gsap.fromTo(
            '.hero-text',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
          );
        }}
        className="main-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative neumorphic p-4">
              <video
                autoPlay
                muted
                loop
                src={slide.src}
                className="w-full h-80 object-cover rounded-lg"
              />
              <h2 className="hero-text text-4xl font-bold absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
                {slide.caption}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress
        className="thumbs-swiper mt-4"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.thumbnail} // Use static image thumbnails for videos
              alt={`Thumbnail ${slide.id}`}
              className="w-full h-20 object-cover rounded-lg cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
