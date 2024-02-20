import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { type CarouselApi } from "@/components/ui/carousel";
  

const NewsCarousel = () => {

    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])
    
  return (
    <>
      <Carousel className="mt-2" setApi={setApi} plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}>
        <CarouselContent>

            <CarouselItem>
                <div className="flex flex-col justify-between gap-4">
 
                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                </div>
            </CarouselItem>

            <CarouselItem>
                <div className="flex flex-col justify-between gap-4">
 
                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                </div>
            </CarouselItem>

            <CarouselItem>
                <div className="flex flex-col justify-between gap-4">
 
                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                </div>
            </CarouselItem>

            <CarouselItem>
                <div className="flex flex-col justify-between gap-4">
 
                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                </div>
            </CarouselItem>

            <CarouselItem>
                <div className="flex flex-col justify-between gap-4">
 
                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                   <div className="flex gap-5">
                    <div className="w-[35%] rounded-2xl">
                            <img src="./news/YT-photos-gallery-3.JPG" alt="news-1" className="object-cover rounded-2xl"/>
                        </div>
                        <div className="w-[65%] text-white text-start flex flex-col gap-2 self-center">
                            <h6>
                                <span>  
                                    <b>Source: </b>
                                    MaxMaharashtra
                                </span>
                                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</span>
                                <span>August 20, 2022</span>
                            </h6>

                            <h3 className="font-semibold border-t-2 text-2xl">
                                <a href="/" target="_blank" rel="noopener">
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem.
                                </a>
                            </h3>

                            <p className="font-sans">Lorem Ipsum dolor sit amet, consectetur adipiscing elit. In nec diam non lorem. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. …<a className="text-nowrap text-blue-600 font-semibold" href="/" target="_blank" rel="noopener">Read More</a></p>

                        </div>
                   </div>

                </div>
            </CarouselItem> 
            
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

       <div className="py-2 text-center">
       {Array.from({ length: count }, (_, i) => (
            <span
            key={i}
            style={{
                display: 'inline-block',
                height: '10px',
                width: '10px',
                borderRadius: '50%',
                backgroundColor: i === current - 1 ? 'violet' : 'grey',
                margin: '0 5px',
            }}
            />
        ))}
      </div>
    </> 
  );
};

export default NewsCarousel;