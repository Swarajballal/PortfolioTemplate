import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ProfileHeader from '@/components/ProfileHeader';
import ConnectSection from '@/components/ConnectSection';
import SocialMediaUpdates from '@/components/SocialMediaUpdates';
import NewsMediaSection from '@/components/NewsMediaSection';
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import HomefocusArea from '@/components/FocusArea/HomePageFocusArea';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainSliderSettings = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
  };

  return (
    <>
      {/* Slider Section */}
      <section className="relative w-full left-0 top-0">
        {isMobile ? (
          <Swiper modules={[Autoplay, Pagination, Navigation]} {...mainSliderSettings}>
            <SwiperSlide><img className='w-full' src="./img/Mobile_1.webp" alt="Mobile Slide 1" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="./img/Mobile_2.webp" alt="Mobile Slide 2" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="./img/Mobile_3.webp" alt="Mobile Slide 3" /></SwiperSlide>
          </Swiper>
        ) : (
          <Swiper modules={[Autoplay, Pagination, Navigation]} {...mainSliderSettings}>
            <SwiperSlide><img className='w-full' src="./img/Banner_1.webp" alt="Slide 1" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="./img/Banner_2.webp" alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src="./img/Banner_3.webp" alt="Slide 3" /></SwiperSlide>
          </Swiper>
        )}
        <div className="absolute inset-0 flex items-start justify-center z-50">
          <NavBar />
        </div>
        <div className="absolute inset-0 flex items-end justify-center z-20">
          <img src="./img/slider-bottom.png" className="w-full h-28" alt="profile-header" />
        </div>
      </section>

      {/* Profile Header Section */}
      <ProfileHeader />

      {/* Focus Area Section */}
      <section id="FOCUSAREAS">
        <HomefocusArea />
      </section>

      {/* Let's Connect Section */}
      <ConnectSection />

      {/* Gallery Section */}
      <section id="GALLERY" className="flex flex-col relative -mt-24">
        <img src="/img/focus-area-top.png" className="w-full" alt="profile-header-image" />
        <div className="flex flex-col items-center bg-[#EAEAEA] gap-2 pb-24">
          <img src="/img/down.png" alt="down-arrow-profile-header" className="h-8 w-2" />
          <h4 className="text-base md:text-lg font-semibold">Best moments with public</h4>
          <h1 className="text-xl md:text-5xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans tracking-tighter">PHOTOS & VIDEOS GALLERY</h1>
          <Gallery />
        </div>
      </section>

      {/* Social Media Live Updates Section */}
      <SocialMediaUpdates />

      {/* News & Media Section */}
      <section id="NEWSMEDIA">
        <NewsMediaSection />
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
