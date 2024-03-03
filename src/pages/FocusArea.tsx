import FocusAreaItem from "@/components/FocusArea/FocusAreaItems";
import MainFocusArea from "@/components/FocusArea/MainFocusArea";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import React, { useState } from "react";
import youthfocusareaimg from "../../public/img/YT focus-section-youth.png";
import womenfocusareaimg from "../../public/img/YT  focus-section-women.png";
import farmerfocusareaimg from "../../public/img/YT  focus-section-farmers.png";
import educationfocusareaimg from "../../public/img/YT focus-section-education.png";
import healthfocusareaimg from "../../public/img/YT focus-section-Health.png";
import governmentfocusareaimg from "../../public/img/YT focus-section-good-governance.png";
import economyfocusareaimg from "../../public/img/YT focus-section-economy.png";
import waterfocusareaimg from "../../public/img/YT  focus-section-water.png";

const FocusArea = () => {
  const [active, setActive] = useState('Youth');
  const FocusAreaItems = ['Youth', 'Women', 'Farmer', 'Education', 'HealthCare', 'Good Governance', 'Economy', 'Water'];


  const images: { [key: string]: string } = {
    'Youth': youthfocusareaimg,
    'Women': womenfocusareaimg,
    'Farmer': farmerfocusareaimg,
    'Education': educationfocusareaimg,
    'HealthCare': healthfocusareaimg,
    'Good Governance': governmentfocusareaimg,
    'Economy': economyfocusareaimg,
    'Water': waterfocusareaimg
  };

  return (
    <>
      <section className='relative top-0 left-0' style={{ backgroundImage: "url('./img/global-desktop.jpg')", backgroundSize: 'cover', backgroundColor: '#D5D5D5' }}>

        <div className=' h-full w-full flex justify-center'>
            <NavBar />
        </div>

        <div className='flex w-[90%] mt-40 mx-auto'>
            <div className="w-1/2 flex">
                <img src="./img/main-focus-area-img.png" className="w-3/5 z-50" alt="profile-header" />
                <img src={images[active]} className="w-1/4 absolute opacity-50 left-[18%]" alt="background-header" />
            </div>

            <div className='m-auto text-start w-1/2'>
                <h1 className="text-7xl font-black bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent">Focus Area</h1>
                <p className='text-3xl font-black text-white'>{active}</p>
            </div>
        </div>

        <img src="./img/slider-bottom.png" className="w-full h-28 -mt-20" alt="profile-header" />
      </section>

      <section>
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

              {FocusAreaItems.map((item) => (
                    <React.Fragment key={item}>
                        <MainFocusArea
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

            <img src="./img/footer-top.png" alt="" className="w-full"/>

      </section>

      <Footer />
    </>
  );
};

export default FocusArea;