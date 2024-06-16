import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col">
      <div className="w-full p-6 md:p-0 md:w-[90%] flex flex-col md:flex-row mx-auto">
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start justify-center">
          <img src="/img/down.png" alt="down-arrow-profile-header" className="h-8 w-2 ml-0 md:ml-32" />
          <h4 className="md:text-lg font-semibold">About the Personality</h4>
          <h1 className="text-xl md:text-4xl font-black bg-gradient-to-r from-violet-900 to-blue-600 bg-clip-text text-transparent">Yashomati Chandrakant Thakur</h1>
          <h4 className="font-semibold mt-1">Member of Maharashtra Legislative Assembly and AICC Secretary for Karnataka and Amravati</h4>
          <p className="text-center md:text-start mt-6">
          Leadership is not about being in charge. It is about taking care of those in your charge." Yashomati Chandrakant Thakur, a prominent figure in Maharashtra's political landscape, has carved a niche for herself through her unwavering dedication and compassionate leadership. Born in the Amravati district, she has been a member of the Maharashtra Legislative Assembly since 2009, representing the Teosa constituency. <br />
          </p>
          <div className="h-10 mt-4 w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
            <button
              onClick={() => navigate('/about')}
              className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white"
            >
              READ MORE
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/img/about-video.webp" className="w-full" alt="profile-header-image" />
        </div>
      </div>
      <img src="/img/focus-area-top.png" className="w-full" alt="profile-header-image" />
    </section>
  );
};

export default ProfileHeader;
