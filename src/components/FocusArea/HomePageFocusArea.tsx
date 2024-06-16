import { useState, useEffect } from 'react';
import FocusAreaItem from '@/components/FocusArea/FocusAreaItem';
import MainFocusArea from '@/components/FocusArea/MainFocusArea';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const focusAreaItems = ['Youth', 'Women', 'Farmer', 'Education', 'HealthCare', 'Good Governance', 'Economy', 'Water'];

const HomeFocusArea = () => {
  const [active, setActive] = useState('Youth');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainSliderSettings = {
    slidesPerView: 1,
    loop: true,
    pagination: false,  
    navigation: true,
    draggable: true,
  };

  return (
    <section className="homepage-focusarea p-6 md:p-0 flex flex-col w-full" style={{ backgroundImage: "url('./img/FocusArea_Background.webp')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#EAEAEA' }}>
      <div className="flex flex-col items-center">
        <img src="./img/down.png" alt="down-arrow-profile-header" className="h-8 w-2" />
        <h4 className="text-lg font-semibold">Let's Work Together</h4>
        <h1 className="text-xl md:text-5xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans">FOCUS AREAS</h1>
      </div>
      <div className=" w-4/5 md:w-[90%] mx-auto mt-10">
        {isMobile ? (
          <Swiper modules={[Pagination, Navigation]} {...mainSliderSettings}>
            {focusAreaItems.map((item) => (
              <SwiperSlide key={item}>
                <div className="flex justify-center">
                  <FocusAreaItem
                    label={item}
                    active={active === item}
                    onClick={() => setActive(item)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-9">
            {focusAreaItems.map((item) => (
              <FocusAreaItem
                key={item}
                label={item}
                active={active === item}
                onClick={() => setActive(item)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-full flex flex-col md:flex-row md:w-4/5 mx-auto gap-4 md:gap-10 justify-center items-center mt-7 md:mt-14">
        <MainFocusArea label={active} showImage={true} />
      </div>
    </section>
  );
};

export default HomeFocusArea;
