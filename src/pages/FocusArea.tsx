import React, { useState, useEffect } from "react";
import FocusAreaItem from "@/components/FocusArea/FocusAreaItems";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import youthfocusareaimg from "../../public/img/YT focus-section-youth.png";
import womenfocusareaimg from "../../public/img/YT  focus-section-women.png";
import farmerfocusareaimg from "../../public/img/YT  focus-section-farmers.png";
import educationfocusareaimg from "../../public/img/YT focus-section-education.png";
import healthfocusareaimg from "../../public/img/YT focus-section-Health.png";
import governmentfocusareaimg from "../../public/img/YT focus-section-good-governance.png";
import economyfocusareaimg from "../../public/img/YT focus-section-economy.png";
import waterfocusareaimg from "../../public/img/YT  focus-section-water.png";
import FocusAreaContent from "@/components/FocusArea/FocusAreaContent";

const FocusArea = () => {
  const [active, setActive] = useState('Youth');
  const [isMobile, setIsMobile] = useState(false);
  const FocusAreaItems = ['Youth', 'Women', 'Farmer', 'Education', 'HealthCare', 'Good Governance', 'Economy', 'Water'];

  const images = {
    'Youth': youthfocusareaimg,
    'Women': womenfocusareaimg,
    'Farmer': farmerfocusareaimg,
    'Education': educationfocusareaimg,
    'HealthCare': healthfocusareaimg,
    'Good Governance': governmentfocusareaimg,
    'Economy': economyfocusareaimg,
    'Water': waterfocusareaimg
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainSliderSettings = {
    slidesPerView: 1,
    loop: true,
    pagination: false,  
    draggable: true,
  };

  return (
    <>
      <section className='relative top-0 left-0' style={{ backgroundImage: "url('./img/global-desktop.jpg')", backgroundSize: 'cover', backgroundColor: '#D5D5D5' }}>
        <div className='h-full w-full flex justify-center'>
          <NavBar />
        </div>

        <div className='flex w-full md:w-[90%]  md:mt-40 flex-col md:flex-row mx-auto p-10'>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row">
            <img src="./img/Yashomati Thakur HD.png" className="w-full md:w-3/5 z-40" alt="profile-header" />
            <img src={images[active]} className="p-5 md:p-0 w-full md:w-1/4 absolute opacity-50 left-0 md:left-[18%]" alt="background-header" />
          </div>

          <div className='m-auto text-center md:text-start w-full md:w-1/2 pb-12 md:pb-0'>
            <h1 className="text-2xl md:text-7xl font-black bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent">Focus Area</h1>
            <p className='text-xl md:text-3xl font-black text-white'>{active}</p>
          </div>
        </div>

        <img src="./img/slider-bottom.png" className="w-full h-28 -mt-20" alt="profile-header" />
      </section>

      <section>
        <div className="w-[90%] mx-auto mt-10">
          {isMobile ? (
            <Swiper modules={[Autoplay, Pagination]} {...mainSliderSettings}>
              {FocusAreaItems.map((item) => (
                <SwiperSlide key={item}>
                  <FocusAreaItem
                    label={item}
                    active={active === item}
                    onClick={() => setActive(item)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-8 gap-9">
              {FocusAreaItems.map((item) => (
                <React.Fragment key={item}>
                  <FocusAreaItem
                    label={item}
                    active={active === item}
                    onClick={() => setActive(item)}
                  />
                </React.Fragment>
              ))}
            </div>
          )}

          <FocusAreaContent label={active} /> 

        </div>

        <img src="./img/footer-top.png" alt="" className="w-full" />
      </section>

      <Footer />
    </>
  );
};

export default FocusArea;
