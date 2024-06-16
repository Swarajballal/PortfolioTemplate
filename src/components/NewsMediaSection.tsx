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
  navigation: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
  },
};

const NewsMediaSection: React.FC = () => {
  return (
    <section
      id="NEWS&MEDIA"
      className="flex flex-col w-full relative items-center justify-center gap-7 md:gap-14 -mt-24 newsmedia-section"
      style={{ backgroundImage: "url('./img/news-bg.png')", backgroundSize: 'cover', backgroundColor: '#D5D5D5' }}
    >
      <div className="flex flex-col-reverse md:flex-col items-center mt-32 md:mt-24">
        <img src="./img/down-white.png" alt="down-arrow-profile-header" className="h-8 w-2" />
        <h4 className="text-base md:text-lg font-semibold text-white">Resources & Latest News</h4>
        <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-600 bg-clip-text text-transparent font-sans tracking-tighter text-right">
          NEWS & MEDIA
        </h1>
      </div>
      <div className="w-full px-6 md:px-28 flex flex-col md:flex-row">
        <div className='w-full md:w-1/5 self-center'>
        <img src="./img/old-man.png" alt="News 1" className="w-full px-10 md:px-0 rounded-xl mb-4 md:mb-0" />
        </div>
        <Swiper modules={[Autoplay, Pagination, Navigation, Grid]} {...newsSliderSettings} className="w-full md:w-4/5">
          <SwiperSlide>
            <div className="news-item flex flex-col md:flex-row items-center gap-2 md:gap-10 px-4 md:px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 1" className="w-[90%] md:w-1/4 rounded-xl" />
              <div className="news-content w-[90%] md:w-3/4 text-white text-left text-sm md:text-lg">
                <h4><strong>Source</strong>: Hindustan Times - June 2024</h4>
                <hr />
                <h3 className="text-sm md:text-2xl font-semibold py-2">
                  Yashomati Thakur named Congress secretary, given Karnataka charge
                </h3>
                <p className='text-xs md:text-base'>
                Smt. Yashomati Thakur was appointed as the AICC Secretary for party affairs in Karnataka, reflecting her growing influence within the Indian National Congress. This strategic appointment aims to bolster the party's presence in Karnataka through grassroots mobilization and organizational restructuring. Thakur is expected to lead efforts to engage with local leaders and enhance the party's outreach programs, ensuring a robust and responsive party framework.
                <a href="https://www.hindustantimes.com/india-news/rahul-gandhi-appoints-yashomati-thakur-as-congress-secretary-to-work-in-karnataka/story-DSa9llr9zVGijLQGc5VlDN.html" target='_blank' className="text-blue-500" rel='noopener'>Read More</a>
                </p>
              </div>
            </div>
            <div className="news-item flex flex-col md:flex-row items-center gap-2 md:gap-10 mt-10 px-4 md:px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 2" className="w-[90%] md:w-1/4 rounded-xl" />
              <div className="news-content w-[90%] md:w-3/4 text-white text-left text-sm md:text-lg">
                <h4><strong>Source</strong>: ABP Live - June 2024</h4>
                <hr />
                <h3 className="text-sm md:text-2xl font-semibold py-2">
                    Congress leader Yashomati Thakur demands Preamble of the Constitution in syllabus
                </h3>
                <p className='text-xs md:text-base'>
                Yashomati Thakur has called for the inclusion of the Preamble of the Indian Constitution in school curricula, emphasizing the importance of teaching values such as equality, justice, and liberty. She argues that these principles are foundational to Indian democracy and should be instilled in students from a young age. This proposal is part of her broader vision to promote civic education and awareness among the youth, fostering a generation that is well-versed in their rights and responsibilities as citizens.government to include the Preamble of the Constitution in the educational syllabus instead of verses from Manusmriti, advocating for teachings that promote equality and fundamental rights.<a href="https://marathi.abplive.com/news/maharashtra/congress-leader-yashomati-thakur-demand-bring-the-preamble-of-the-constitution-into-the-syllabus-rather-than-the-manusmriti-verses-maharashtra-marathi-news-1285700" target='_blank' rel='noopener' className="text-blue-500">Read More</a>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="news-item flex flex-col md:flex-row items-center gap-2 md:gap-10 px-4 md:px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 1" className="w-[90%] md:w-1/4 rounded-xl" />
              <div className="news-content w-[90%] md:w-3/4 text-white text-left text-sm md:text-lg">
                <h4><strong>Source</strong>:  TV9 Marathi - June 2024</h4>
                <hr />
                <h3 className="text-sm md:text-2xl font-semibold py-2">
                Amravati Exit Poll 2024: Yashomati Thakur warns ahead of results
                </h3>
                <p className='text-xs md:text-base'>
                Ahead of the 2024 Lok Sabha elections, Yashomati Thakur issued a stark warning about potential unrest if the Mahavikas Aghadi (MVA) coalition did not secure victory in Amravati. She emphasized the importance of fair and transparent elections and called on her supporters to remain vigilant. Thakur's proactive approach to ensuring electoral integrity reflects her dedication to democratic principles and her commitment to safeguarding the interests of her constituents.<a href="https://www.tv9marathi.com/videos/amravati-exit-poll-2024-yashomati-thakur-warns-ahead-of-results-if-mva-doesnt-win-2024-lok-sabha-election-2024-there-will-be-civil-war-1210238.html" rel='noopener' target='_blank' className="text-blue-500">Read More</a>
                </p>
              </div>
            </div>
            <div className="news-item flex flex-col md:flex-row items-center gap-2 md:gap-10 mt-10 px-4 md:px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 2" className="w-[90%] md:w-1/4 rounded-xl" />
              <div className="news-content w-[90%] md:w-3/4 text-white text-left text-sm md:text-lg">
                <h4><strong>Source</strong>: Hindustan Times - June 2024</h4>
                <hr />
                <h3 className="text-sm md:text-2xl font-semibold py-2">
                Four new faces from Maharashtra appointed to CWC
                </h3>
                <p className='text-xs md:text-base'>
                Yashomati Thakur was among four leaders from Maharashtra appointed to the Congress Working Committee (CWC), a testament to her significant contributions and leadership within the party. This role will allow her to play a crucial part in shaping the party's strategies and policies at the national level. Her inclusion in the CWC is expected to bring fresh perspectives and renewed energy to the party's efforts to address pressing national issues.<a href="https://www.hindustantimes.com/cities/mumbai-news/congress-appoints-new-members-from-maharashtra-to-indicate-state-s-importance-ahead-of-elections-101692556996902.html" target='_blank' className="text-blue-500" rel='noopener'>Read More</a>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="news-item flex flex-col md:flex-row items-center gap-2 md:gap-10 px-4 md:px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 1" className="w-[90%] md:w-1/4 rounded-xl" />
              <div className="news-content w-[90%] md:w-3/4 text-white text-left text-sm md:text-lg">
                <h4><strong>Source</strong>:  Esakal - December 28, 2023</h4>
                <hr />
                <h3 className="text-sm md:text-2xl font-semibold py-2">
                Congress Foundation Day: "Congress Party makes a fresh start from Vidarbha," says Yashomati Thakur
               </h3>
                <p className='text-xs md:text-base'>
                During the Congress Foundation Day celebrations, Yashomati Thakur highlighted the party's renewed focus on Vidarbha, a region with a rich legacy of social reformers and freedom fighters. Thakur called for collective support to continue the legacy of leaders like Mahatma Gandhi and Dr. Babasaheb Ambedkar, emphasizing the need to unite and work towards preserving the constitutional values and human rights. Her speech underscored her vision of reinvigorating the party's presence and influence in Vidarbha.<a href="https://www.esakal.com/vidarbha/nagpur/congress-foundation-day-congress-party-makes-fresh-start-from-vidarbha-says-yashomati-thakur-aau85" className="text-blue-500" target='_blank' rel='noopener'>Read More</a>
                </p>
              </div>
            </div>
            <div className="news-item flex flex-col md:flex-row items-center gap-2 md:gap-10 mt-10 px-4 md:px-16">
              <img src="./news/YT-photos-gallery-3.JPG" alt="News 2" className="w-[90%] md:w-1/4 rounded-xl" />
              <div className="news-content w-[90%] md:w-3/4 text-white text-left text-sm md:text-lg">
                <h4><strong>Source</strong>: Lokmat Times - June 2024</h4>
                <hr />
                <h3 className="text-sm md:text-2xl font-semibold py-2">
                Congress aims to retain Amravati Lok Sabha seat
                </h3>
                <p className='text-xs md:text-base'>
                As part of the Congress's strategy to retain the Amravati seat, Yashomati Thakur played a crucial role in mobilizing support and strategizing for the upcoming elections. Her efforts included organizing rallies, engaging with local communities, and advocating for policies that address the needs of her constituents. Thakur's dedication to her constituency and her strategic approach to campaigning reflect her commitment to ensuring continued representation and development for Amravati.<a href="https://www.lokmattimes.com/maharashtra/congress-aims-to-retain-amravati-lok-sabha-seat/" rel='noopener' className="text-blue-500" target='_blank'>Read More</a>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="./img/footer-top.png" alt="" className="w-full" />
    </section>
  );
};

export default NewsMediaSection;
