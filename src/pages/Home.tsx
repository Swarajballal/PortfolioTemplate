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
        <Swiper modules={[Autoplay, Pagination, Navigation]} {...mainSliderSettings}>
          <SwiperSlide><img src="./img/YT-Website-Slider-1.jpg" alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src="./img/YT-Website-Slider-2.jpg" alt="Slide 2" /></SwiperSlide>
        </Swiper>
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
          <h4 className="text-lg font-semibold">Best moments with public</h4>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans tracking-tighter">PHOTOS & VIDEOS GALLERY</h1>
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
