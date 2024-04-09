import FocusAreaItem from "@/components/FocusArea/FocusAreaItems";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import NavBar from "@/components/navbar/NavBar";
import NewsCarousel from "@/components/newsCarousel/NewsCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useState } from "react";
import React from "react"
import { Timeline } from 'react-twitter-widgets'
import FocusAreaContent from "@/components/FocusArea/FocusAreaContent";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = () => {
  const navigate = useNavigate();
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
                <h4 className="font-semibold mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

                <p className="text-start mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel nisl auctor, blandit lacus id, aliquet lorem. Nullam non risus at sapien cursus aliquet. Sed auctor, justo in dignissim cursus, quam mauris varius sem, et aliquet neque lorem nec nunc. Mauris non ligula suscipit, volutpat mauris id, consequat mauris. Integer in tellus non mauris mollis aliquam. Curabitur a nunc non lectus fringilla bibendum vitae sed turpis. Cras aliquet, sem a lobortis pellentesque, quam lorem feugiat sem, ac condimentum ligula ipsum a dolor Integer in tellus non mauris mollis aliquam. Curabitur a nunc non lectus fringilla bibendum vitae sed turpis.
                </p>

                
                <div className="h-10 mt-4 w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
                    <button onClick={() => {
                      navigate('/about');
                    }} className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
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
                                    case 'Education':
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
              {FocusAreaItems.map((item) => (
                    <React.Fragment key={item}>
                        <FocusAreaContent
                            label={item}
                            active={active == item}
                            onClick={() => {
                                setActive(item);
                                switch(item) {
                                    case 'Youth':
                                        navigate('/focus-area')
                                        break;
                                    case 'Women':
                                        navigate('/focus-area')
                                        break;
                                    case 'Farmer':
                                        navigate('/focus-area')
                                        break;
                                    case 'Education':
                                        navigate('/focus-area')
                                        break;  
                                    case 'HealthCare':
                                        navigate('/focus-area')
                                        break;
                                    case 'Good Governance':
                                        navigate('/focus-area')
                                        break;
                                    case 'Economy':
                                        navigate('/focus-area')
                                        break;
                                    case 'Water':
                                        navigate('/focus-area')
                                      break;  
                                    default:
                                        navigate('/')
                                        break;       
                                    }
                                }}
                            />
                    </React.Fragment>
                ))}
          </div>

         </section>

         {/* <---- Focus area bg ----> */}
         
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
              <h1 className="text-white font-black text-5xl font-sans">+91 12345678</h1>   

              <p className="text-[#fac53b] font-semibold text-3xl font-sans tracking-tighter">
                to directly connect with the
                office of
              </p> 
              <span className="text-white font-semibold text-3xl font-sans tracking-tighter underline"> MLA Yashomati Chandrakant Thakur</span>         
            </div>

         </section>
        
        <section id="GALLERY" className="flex flex-col  relative -mt-24">
           <img src="./img/focus-area-top.png" className="w-full" alt="profile-header-image" />
           <div className="flex flex-col items-center bg-[#EAEAEA] gap-2 pb-24">
              <img src="./img/down.png" alt="down-arrow-profile-header"
                  className="h-8 w-2"/>
                <h4 className="text-lg font-semibold">Best moments with public</h4>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans tracking-tighter">PHOTOS & VIDEOS GALLERY</h1>
                <Gallery />
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

        <section id="NEWS&MEDIA" className="flex flex-col w-full relative items-center justify-center gap-14 -mt-24" style={{ backgroundImage: "url('./img/news-bg.png')", backgroundSize: 'cover', backgroundColor: '#D5D5D5' }}>
           
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

           <Footer />
      
    </>
  );
};

export default Home;

