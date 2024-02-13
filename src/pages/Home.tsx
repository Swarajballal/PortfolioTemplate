import FocusAreaItem from "@/components/FocusArea/FocusAreaItems";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import NavBar from "@/components/navbar/NavBar";
import { EmblaOptionsType } from 'embla-carousel'
import { useState } from "react";
import React from "react"

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = () => {

  const [active, setActive] = useState('Youth');
  const FocusAreaItems = ['Youth', 'Women', 'Farmer', 'Education', 'HealthCare', 'Good Governance', 'Economy', 'Water'];

  return (
    <>
      <section className="relative w-full left-0 top-0">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <div className="absolute inset-0 flex items-start justify-center">
          <NavBar />
        </div>
        <div className="absolute inset-0 flex items-end justify-center">
        <img src="./img/slider-bottom.png" className="w-full h-28" alt="profile-header" />
        </div>
      </section>
      
      {/* <---- Profile Header ----> */}

      <section className="flex flex-col">
        <div className="w-[90%] h-screen flex mx-auto">
            <div className="flex flex-col w-1/2 items-start justify-center">
                <img src="./img/down.png" alt="down-arrow-profile-header"
                 className="h-8 w-2 ml-32"/>
                <h4 className="text-lg font-semibold">About the Personality</h4>
                <h1 className="text-4xl font-black bg-gradient-to-r from-orange-600 to-green-500 ... bg-clip-text text-transparent">Yashomati Chandrakant Thakur</h1>
                <h4 className="font-semibold mt-1">MLA (Member of Legislative Assembly, Karjat – Jamkhed)</h4>

                <p className="text-start mt-6">
                  Rohit Rajendra Pawar is hailed as the young face of Maharashtra Politics. He envisions building a better Maharashtra where everyone has a fair chance to succeed. As the CEO of Baramati Agro Pvt Ltd, he has made a remarkable contribution to the Agriculture Industry. He has successfully held the position as the Youngest President of ISMA in 2018-2019. He started his political career as the Pune Zilla Parishad Member from Shrisufal in Baramati Taluka in 2017. He is carrying forward his family legacy set by his grandfather- Padmashree Shri. Appasaheb Pawar, NCP chief Shri. Sharad Pawar and parents Rajendra Pawar and Sunandatai Pawar ensuring enhanced growth and sustainable development in the socio-political spectrum.
                </p>

                
                  <div className="h-10 mt-4 w-fit rounded-full bg-gradient-to-r from-orange-600 via-orange-700 to-green-500 p-0.5">
                    <button className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent">
                       READ MORE
                    </button>
                  </div>
            </div>

            <div className="w-1/2">
                <img src="./img/about-video.png" className="w-full " alt="profile-header-image" />
            </div>
          </div>
            
          <img src="./img/focus-area-top.png" className="w-full " alt="profile-header-image" />

      </section>

         {/* <---- Focus area bg ----> */}

         <section className="flex flex-col bg-[url('./img/focus-area-bg.png')] bg-contain bg-no-repeat bg-center w-full bg-[#EAEAEA]">

            <div className="flex flex-col items-center">
              <img src="./img/down.png" alt="down-arrow-profile-header"
                  className="h-8 w-2"/>
                <h4 className="text-lg font-semibold">Let's Work Together</h4>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-700 to-green-600 ... bg-clip-text text-transparent font-sans">FOCUS AREAS</h1>
            </div>

            <div className="w-[90%] mx-auto mt-10">
              <div className="grid grid-cols-8 gap-9">
                 
              {FocusAreaItems.map((item) => (
                        <React.Fragment key={item}>
                            <FocusAreaItem
                                label={item}
                                active={active == item}
                                onClick={() => {
                                    setActive(item);
                                    switch(item) {
                                        case 'Youth':
                                            break;
                                        case 'Women':
                                            break;
                                        case 'Farmer':
                                            break;
                                        case '  ':
                                            break;  
                                        case 'HealthCare':
                                            break;
                                        case 'Good Governance':
                                            break;
                                        case 'Economy':
                                            break;
                                        case 'Water':
                                          break;  
                                        default:
                                            break;       
                                        }
                                    }}
                                />
                        </React.Fragment>
                    ))}

              </div>
            </div>

            <div className="w-4/5 flex mx-auto gap-10 justify-center items-center mt-14">
            <div className="w-2/5]">
                <img src="./img/YT focus-section-youth.png" className="w-full" alt="profile-header-image" />
            </div>

            <div className="flex flex-col w-3/5 items-start justify-center">
                <p className="text-start mt-6">
                  Rohit Rajendra Pawar is hailed as the young face of Maharashtra Politics. He envisions building a better Maharashtra where everyone has a fair chance to succeed. As the CEO of Baramati Agro Pvt Ltd, he has made a remarkable contribution to the Agriculture Industry. He has successfully held the position as the Youngest President of ISMA in 2018-2019. He started his political career as the Pune Zilla Parishad Member from Shrisufal in Baramati Taluka in 2017. He is carrying forward his family legacy set by his grandfather- Padmashree Shri. Appasaheb Pawar, NCP chief Shri. Sharad Pawar and parents Rajendra Pawar and Sunandatai Pawar ensuring enhanced growth and sustainable development in the socio-political spectrum.
                </p>

                
                  <div className="h-10 mt-4 w-fit rounded-full bg-gradient-to-r from-orange-600 via-orange-700 to-green-500 p-0.5">
                    <button className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent">
                       READ MORE
                    </button>
                  </div>
            </div>
          </div>

         </section>

         <section className="flex flex-col bg-[url('./img/YT-Form-Bg.png')] bg-cover w-full h-screen absolute -mt-8 bg-[#EAEAEA]">
                  
         </section>
      
    </>
  );
};

export default Home;

