import React from 'react';

const ConnectSection: React.FC = () => {
  return (
    <section className="flex w-full relative items-center justify-center gap-28" style={{ backgroundImage: "url('/img/YT-Form-Bg.png')", backgroundSize: 'cover', backgroundColor: '#EAEAEA' }}>
      <div className="bg-blue-950 w-4/12 h-min pb-16 rounded-3xl mt-32">
        <div className="h-full w-[90%] mx-auto mt-10 flex flex-col items-start gap-4">
          <h1 className="font-semibold font-sans text-3xl tracking-tighter text-white">Let's Connect</h1>
          <p className="text-left font-serif font-semibold text-white">Write a message to share it with Yashomati Chandrakant Thakur.</p>
          <form action="" className="w-full flex flex-col gap-2">
            <div className="relative flex flex-col items-center justify-center w-full bg-transparent placeholder-gray-600 bottom-2 gap-1">
              <label htmlFor="name" className="self-start font-sans font-semibold text-sm text-white">Full Name <span className="text-red-600">*</span> :</label>
              <input type="text" id="name" className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2" placeholder="Enter Your Full Name" required />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full bg-transparent placeholder-gray-600 bottom-2 gap-1">
              <label htmlFor="mobilenumber" className="self-start font-sans font-semibold text-sm text-white">Mobile Number<span className="text-red-600"> *</span> :</label>
              <input type="number" id="mobilenumber" className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2" placeholder="Enter Your Mobile Number" required />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full bg-transparent placeholder-gray-600 bottom-2 gap-1">
              <label htmlFor="email" className="self-start font-sans font-semibold text-sm text-white">Email ID (Optional) :</label>
              <input type="email" id="email" className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2" placeholder="Enter Your Email ID" />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full bg-transparent placeholder-gray-600 bottom-2 gap-1">
              <label htmlFor="messagearea" className="self-start font-sans font-semibold text-sm text-white">Your Message <span className="text-red-600">*</span></label>
              <textarea id="messagearea" className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2" placeholder="Your Message" required />
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
          <img src="/icons/call-icon.png" alt="call-icon" className="h-40 w-40" />
          <span className="font-semibold text-2xl text-[#fac53b]">Call On</span>
        </div>
        <h1 className="text-white font-black text-5xl font-sans">+91 12345678</h1>
        <p className="text-[#fac53b] font-semibold text-3xl font-sans tracking-tighter">
          to directly connect with the
          office of
        </p>
        <span className="text-white font-semibold text-3xl font-sans tracking-tighter underline">MLA Yashomati Chandrakant Thakur</span>
      </div>
    </section>
  );
};

export default ConnectSection;
