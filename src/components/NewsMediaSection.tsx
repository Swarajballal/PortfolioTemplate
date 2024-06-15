import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules';

const newsSliderSettings = {
  slidesPerView: 1,
  grid: {
    rows: 1,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: { clickable: true },
  navigation: true,
};

const NewsMediaSection: React.FC = () => {
  return (
    <section id="NEWS&MEDIA" className="flex flex-col w-full relative items-center justify-center gap-14 -mt-24" style={{ backgroundImage: "url('./img/news-bg.png')", backgroundSize: 'cover', backgroundColor: '#D5D5D5' }}>
      <div className="flex flex-col items-center mt-24">
        <img src="./img/down-white.png" alt="down-arrow-profile-header" className="h-8 w-2" />
        <h4 className="text-lg font-semibold text-white">Resources & Latest News</h4>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-600 ... bg-clip-text text-transparent font-sans tracking-tighter text-right">NEWS & MEDIA</h1>
      </div>
      <div className="w-[80%] mx-auto flex">
        <img src="./img/old-man.png" alt="News 1" className='w-1/4 rounded-xl'/>
        <Swiper modules={[Autoplay, Pagination, Navigation, Grid]} {...newsSliderSettings}>
          <SwiperSlide>
            <div className="news-item flex items-center gap-10 px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 1" className="w-1/4 rounded-xl" />
              <div className="news-content w-3/4 text-white text-left text-lg">
                <h4><strong>Source</strong>: MaxMaharashtra - August 20, 2022</h4>
                <hr />
                <h3 className='text-2xl font-semibold py-2'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.</h3>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. ...<a href="#" className='text-blue-500'>Read More</a></p>
              </div>
            </div>
            <div className="news-item flex items-center gap-10 mt-20 px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 2" className="w-1/4 rounded-xl" />
              <div className="news-content w-3/4 text-white text-left">
                <h4><strong>Source</strong>: MaxMaharashtra - August 20, 2022</h4>
                <hr />
                <h3 className='text-2xl font-semibold py-2'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.</h3>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. ...<a href="#" className='text-blue-500'>Read More</a></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="news-item flex items-center gap-10 px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 1" className="w-1/4 rounded-xl" />
              <div className="news-content w-3/4 text-white text-left">
                <h4><strong>Source</strong>: MaxMaharashtra - August 20, 2022</h4>
                <hr />
                <h3 className='text-2xl font-semibold py-2'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.</h3>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. ...<a href="#" className='text-blue-500'>Read More</a></p>
              </div>
            </div>
            <div className="news-item flex items-center gap-10 mt-20 px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 2" className="w-1/4 rounded-xl" />
              <div className="news-content w-3/4 text-white text-left">
                <h4><strong>Source</strong>: MaxMaharashtra - August 20, 2022</h4>
                <hr />
                <h3 className='text-2xl font-semibold py-2'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.</h3>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. ...<a href="#" className='text-blue-500'>Read More</a></p>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more news items as needed */}
        </Swiper>
      </div>
      <img src="./img/footer-top.png" alt="" className="w-full" />
    </section>
  );
};

export default NewsMediaSection;
