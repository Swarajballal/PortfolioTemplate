import FocusAreaItem from "@/components/FocusArea/FocusAreaItems";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import NavBar from "@/components/navbar/NavBar";
import NewsCarousel from "@/components/newsCarousel/NewsCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useState } from "react";
import React from "react"
import { Timeline } from 'react-twitter-widgets'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
        <div className="w-[90%] flex mx-auto">
            <div className="flex flex-col w-1/2 items-start justify-center">
                <img src="./img/down.png" alt="down-arrow-profile-header"
                 className="h-8 w-2 ml-32"/>
                <h4 className="text-lg font-semibold">About the Personality</h4>
                <h1 className="text-4xl font-black bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent">Yashomati Chandrakant Thakur</h1>
                <h4 className="font-semibold mt-1">MLA (Member of Legislative Assembly, Karjat – Jamkhed)</h4>

                <p className="text-start mt-6">
                  Rohit Rajendra Pawar is hailed as the young face of Maharashtra Politics. He envisions building a better Maharashtra where everyone has a fair chance to succeed. As the CEO of Baramati Agro Pvt Ltd, he has made a remarkable contribution to the Agriculture Industry. He has successfully held the position as the Youngest President of ISMA in 2018-2019. He started his political career as the Pune Zilla Parishad Member from Shrisufal in Baramati Taluka in 2017. He is carrying forward his family legacy set by his grandfather- Padmashree Shri. Appasaheb Pawar, NCP chief Shri. Sharad Pawar and parents Rajendra Pawar and Sunandatai Pawar ensuring enhanced growth and sustainable development in the socio-political spectrum.
                </p>

                
                <div className="h-10 mt-4 w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
                    <button className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
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

         <section className="flex flex-col w-full" style={{ backgroundImage: "url('./img/focus-area-bg.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#EAEAEA' }}>

            <div className="flex flex-col items-center">
              <img src="./img/down.png" alt="down-arrow-profile-header"
                  className="h-8 w-2"/>
                <h4 className="text-lg font-semibold">Let's Work Together</h4>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans">FOCUS AREAS</h1>
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

                
                  <div className="h-10 mt-4 w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
                    <button className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
                       READ MORE
                    </button>
                  </div>
            </div>
          </div>

         </section>

         <section className="flex w-full relative items-center justify-center gap-28" style={{ backgroundImage: "url('./img/YT-Form-Bg.png')", backgroundSize: 'cover', backgroundColor: '#EAEAEA' }}>
            <div className="bg-blue-950 w-4/12 h-min pb-16 rounded-3xl mt-32">
                  <div className="h-full w-[90%] mx-auto mt-10 flex flex-col items-start gap-4">
                      <h1 className="font-semibold font-sans text-3xl tracking-tighter text-white">Let's Connect</h1> 
                      <p className="text-left font-serif font-semibold text-white">Write a message to share it with Yashomati Chandrakant Thakur.</p>

                      <form action="" className="w-full flex flex-col gap-2">

                      <div className=" relative flex flex-col items-center justify-center w-full bg-transparent  placeholder-gray-600 bottom-2 gap-1">
                              <label htmlFor="name"  className="self-start font-sans font-semibold text-sm text-white">Full Name <span className="text-red-600">*</span> :</label>
                              <input type="text" id="name"  className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white  border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2"
                        placeholder="Enter Your Full Name" required />
                      </div>

                      <div className=" relative flex flex-col items-center justify-center w-full bg-transparent  placeholder-gray-600 bottom-2 gap-1">
                              <label htmlFor="mobilenumber"  className="self-start font-sans font-semibold text-sm text-white">Mobile Number<span className="text-red-600"> *</span> :</label>
                              <input type="number" id="mobilenumber"  className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white  border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2"
                        placeholder="Enter Your Mobile Number" required />
                      </div>

                      <div className=" relative flex flex-col items-center justify-center w-full bg-transparent  placeholder-gray-600 bottom-2 gap-1">
                              <label htmlFor="email"  className="self-start font-sans font-semibold text-sm text-white">Email ID (Optional) :</label>
                              <input type="email" id="email"  className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white  border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2"
                        placeholder="Enter Your Email ID" required />
                      </div>

                      <div className=" relative flex flex-col items-center justify-center w-full bg-transparent  placeholder-gray-600 bottom-2 gap-1">
                              <label htmlFor="messagearea"  className="self-start font-sans font-semibold text-sm text-white">Your Message <span className="text-red-600">*</span></label>
                              <textarea id="messagearea"  className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white  border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2"
                        placeholder="Your Message" required />
                      </div>

                      <div className="h-12 self-center w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
                        <button className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
                          SUBMIT
                        </button>
                      </div>
                      
                      </form> 
                  </div>           
            </div>

            <div className="flex flex-col items-start w-1/3 h-[60%] mt-20 gap-2">
              <div className="flex flex-row items-end">
                  <img src="./icons/call-icon.png" alt="call-icon" className="h-40 w-40" />
                  <span className="font-semibold text-2xl text-[#fac53b]">Call  On</span>
              </div> 
              <h1 className="text-white font-black text-5xl font-sans">+91 9696330330</h1>   

              <p className="text-[#fac53b] font-semibold text-3xl font-sans tracking-tighter">
                to directly connect with the
                office of
              </p> 
              <span className="text-white font-semibold text-3xl font-sans tracking-tighter underline"> MLA Yashomati Chandrakant Thakur</span>         
            </div>

         </section>
        
        <section className="flex flex-col  relative -mt-24">
           <img src="./img/focus-area-top.png" className="w-full" alt="profile-header-image" />
           <div className="flex flex-col items-center bg-[#EAEAEA] gap-2 pb-24">
              <img src="./img/down.png" alt="down-arrow-profile-header"
                  className="h-8 w-2"/>
                <h4 className="text-lg font-semibold">Best moments with public</h4>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans tracking-tighter">PHOTOS & VIDEOS GALLERY</h1>

                <div className="grid grid-cols-6 gap-3 mt-3 w-[90%]">
            
                      <div>
                        <img src="./img/YT-photos-gallery-1.JPG" alt="" className="object-cover w-full rounded-2xl hover:scale-105 transition duration-500 cursor-pointer" />
                      </div>

                      <div>
                        <img src="./img/YT-photos-gallery-2.JPG" alt="" className="object-cover w-full rounded-2xl hover:scale-105 transition duration-500 cursor-pointer" />
                      </div>

                      <div>
                        <img src="./img/YT-photos-gallery-3.JPG" alt="" className="object-cover w-full rounded-2xl hover:scale-105 transition duration-500 cursor-pointer" />
                      </div>

                      <div>
                        <img src="./img/YT-photos-gallery-4.JPG" alt="" className="object-cover w-full rounded-2xl hover:scale-105 transition duration-500 cursor-pointer" />
                      </div>

                      <div>
                        <img src="./img/YT-photos-gallery-5.JPG" alt="" className="object-cover w-full rounded-2xl hover:scale-105 transition duration-500 cursor-pointer" />
                      </div>

                      <div>
                        <img src="./img/YT-photos-gallery-6.JPG" alt="" className="object-cover w-full rounded-2xl hover:scale-105 transition duration-500 cursor-pointer" />
                      </div>

                </div>

                      <div className="h-12 self-center w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5 mt-3">
                              <button className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-sans font-semibold tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
                                See More
                              </button>
                      </div>
            
            </div>

        </section>

          
        <section className="flex flex-col relative -mt-24 pb-10">
           <img src="./img/feed-top.png" className="w-full" alt="profile-header-image" />
           <div className="flex flex-col items-center justify-center bg-[#EAEAEA] pb-20" style={{ backgroundImage: "url('./img/feed-bg.jpg')", backgroundSize: 'cover', backgroundColor: '#EAEAEA' }}>
            
            <div className="grid grid-cols-3 w-[90%]">
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl w-fit">

                <Timeline
                  dataSource={{ sourceType: "profile", screenName: "AdvYashomatiINC" }}
                  options={{ width: "400", height: "500" }}
                />
                </div>

                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl w-fit">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAdvYashomatiINC&tabs=timeline%20%2C%20events&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                    width="400" 
                    height="500" 
                    style={{ border: "none", overflow: "hidden", borderRadius: "1rem" }} 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  >
                  </iframe>
                </div>

                <div>
                  <div className="flex flex-col items-center">
                    <img src="./img/down.png" alt="down-arrow-profile-header"
                        className="h-8 w-2"/>
                      <h4 className="text-lg font-semibold">Get Social Media updates</h4>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans tracking-tighter text-right">SOCIAL MEDIA LIVE <br/> UPDATES</h1>
                  </div>
                </div>
              
            </div>
            
            </div>

        </section>

        <section className="flex flex-col w-full relative items-center justify-center gap-14 -mt-24" style={{ backgroundImage: "url('./img/news-bg.png')", backgroundSize: 'cover', backgroundColor: '#D5D5D5' }}>
           
          <div className="flex flex-col items-center mt-24">
            <img src="./img/down-white.png" alt="down-arrow-profile-header"
                className="h-8 w-2"/>
              <h4 className="text-lg font-semibold text-white">Resources & Latest News</h4>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-600 ... bg-clip-text text-transparent font-sans tracking-tighter text-right">NEWS & MEDIA</h1>
          </div>

          <div className="flex items-center justify-around w-[80%] ">
            <img src="./img/old-man.png" alt="down-arrow-profile-header"
                className="w-1/4"/>
              <div className="w-2/3">
                     <NewsCarousel />            
              </div>
          </div>

          <img src="./img/footer-top.png" alt="" className="w-full"/>
         </section>

          {/* <---- Footer ----> */}

        <section className="flex relative justify-around bg-[#353535] pb-5">
            <div className="w-[80%] flex justify-between">

            <div className="flex flex-col gap-2 text-start">

                <h2 className="text-lg text-white font-bold font-sans tracking-tighter">FOLLOW MLA YASHOMATI CHANDRAKANT THAKUR FOR LIVE UPDATES</h2>

                <ul className="flex gap-4 text-3xl text-white">
                  <li>
                    <FaInstagram  />
                  </li>

                  <li>
                    <FaFacebook />
                  </li>

                  <li>
                    <FaSquareXTwitter />
                  </li>
                  
                  <li>
                    <FaLinkedin />
                  </li>

                </ul>

                <h3 className="text-sm text-white font-sans">© 2024. All rights reserved</h3>

            </div>

                  <div className="flex flex-col gap-2 text-start -mt-10">
                      <p className="font-sans tracking-tighter text-base text-white">Srujan House, In front of Teri Tree Hotel,<br/>
                         Bhosale Nagar, Shivaji Road,<br/>
                         Magarpatta, Hadapsar - 411028 <br/>
                      </p>

                      <h2 className="text-lg text-white font-bold font-sans tracking-tighter">+91 969 633 0330</h2>

                      <h3 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-blue-600 ... bg-clip-text text-transparent font-sans">rrp@rohitpawar.org</h3>

                  </div> 

            </div>
        </section>
      
    </>
  );
};

export default Home;

