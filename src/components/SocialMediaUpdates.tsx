import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const SocialMediaUpdates: React.FC = () => {
  return (
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
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAdvYashomatiINC&tabs=timeline%20%2C%20events&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="400"
              height="500"
              style={{ border: "none", overflow: "hidden", borderRadius: "1rem" }}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >
            </iframe>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <img src="./img/down.png" alt="down-arrow-profile-header" className="h-8 w-2" />
              <h4 className="text-lg font-semibold">Get Social Media updates</h4>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans tracking-tighter text-right">SOCIAL MEDIA LIVE <br /> UPDATES</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaUpdates;
