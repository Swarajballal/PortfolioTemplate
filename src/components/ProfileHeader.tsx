import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col">
      <div className="w-[90%] flex mx-auto">
        <div className="flex flex-col w-1/2 items-start justify-center">
          <img src="/img/down.png" alt="down-arrow-profile-header" className="h-8 w-2 ml-32" />
          <h4 className="text-lg font-semibold">About the Personality</h4>
          <h1 className="text-4xl font-black bg-gradient-to-r from-violet-900 to-blue-600 bg-clip-text text-transparent">Yashomati Chandrakant Thakur</h1>
          <h4 className="font-semibold mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p className="text-start mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel nisl auctor, blandit lacus id, aliquet lorem. Nullam non risus at sapien cursus aliquet. Sed auctor, justo in dignissim cursus, quam mauris varius sem, et aliquet neque lorem nec nunc. Mauris non ligula suscipit, volutpat mauris id, consequat mauris. Integer in tellus non mauris mollis aliquam. Curabitur a nunc non lectus fringilla bibendum vitae sed turpis. Cras aliquet, sem a lobortis pellentesque, quam lorem feugiat sem, ac condimentum ligula ipsum a dolor Integer in tellus non mauris mollis aliquam. Curabitur a nunc non lectus fringilla bibendum vitae sed turpis.
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
        <div className="w-1/2">
          <img src="/img/about-video.png" className="w-full" alt="profile-header-image" />
        </div>
      </div>
      <img src="/img/focus-area-top.png" className="w-full" alt="profile-header-image" />
    </section>
  );
};

export default ProfileHeader;
