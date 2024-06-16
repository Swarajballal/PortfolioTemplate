import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const SocialMediaUpdates: React.FC = () => {
  return (
    <section className="flex flex-col relative -mt-24 pb-10">
      <img src="./img/feed-top.png" className="w-full" alt="profile-header-image" />
      <div className="flex flex-col items-center justify-center bg-[#EAEAEA] p-6 md:p-0 md:pb-20" style={{ backgroundImage: "url('./img/feed-bg.jpg')", backgroundSize: 'cover', backgroundColor: '#EAEAEA' }}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-3 w-full md:w-[90%] gap-4">
          <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl w-full md:w-fit">
            <Timeline
              dataSource={{ sourceType: "profile", screenName: "AdvYashomatiINC" }}
              options={{ width: "400", height: "500" }}
              className="w-full h-full md:w-[400px] md:h-[500px]"
            />
          </div>
          <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl w-full md:w-fit">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAdvYashomatiINC&tabs=timeline%20%2C%20events&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="400"
              height="500"
              style={{ border: "none", overflow: "hidden", borderRadius: "1rem" }}
              className="w-full max-h-max md:w-[400px] md:h-[500px]"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >
            </iframe>
          </div>
          <div className="flex flex-col items-center">
            <img src="./img/down.png" alt="down-arrow-profile-header" className="h-8 w-2" />
            <h4 className="text-base md:text-lg font-semibold">Get Social Media updates</h4>
            <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 bg-clip-text text-transparent font-sans tracking-tighter text-center md:text-right">SOCIAL MEDIA LIVE <br /> UPDATES</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaUpdates;
