import React from 'react';
import emailjs from 'emailjs-com';

const ConnectSection = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
      console.error("EmailJS environment variables are not set");
      return;
    }

    emailjs.sendForm(serviceID, templateID, e.target, userID)
    .then((result) => {
      console.log("Email sent successfully:", result.text);
      alert('Email successfully sent!');
      e.target.reset();
    }, (error) => {
      console.log("Error sending email:", error.text);
      alert('Failed to send email. Please try again.');
    });
  };

  return (
    <section className="flex flex-col md:flex-row w-full p-6 md:p-0 relative items-center justify-center gap-10 md:gap-28" style={{ backgroundImage: "url('/img/YT-Form-Bg.png')", backgroundSize: 'cover', backgroundColor: '#EAEAEA' }}>
      <div className="bg-blue-950 w-full md:w-4/12 h-min pb-8 md:pb-16 rounded-3xl mt-32">
        <div className="h-full w-[90%] mx-auto mt-10 flex flex-col items-start gap-4">
          <h1 className="font-semibold font-sans text-3xl tracking-tighter text-white">Let's Connect</h1>
          <p className="text-left font-serif font-semibold text-white">Write a message to share it with Yashomati Chandrakant Thakur.</p>
          <form onSubmit={sendEmail} className="w-full flex flex-col gap-2">
            <div className="relative flex flex-col items-center justify-center w-full bg-transparent placeholder-gray-600 bottom-2 gap-1">
              <label htmlFor="name" className="self-start font-sans font-semibold text-sm text-white">Full Name <span className="text-red-600">*</span> :</label>
              <input type="text" id="name" name="from_name" className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2" placeholder="Enter Your Full Name" required />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full bg-transparent placeholder-gray-600 bottom-2 gap-1">
              <label htmlFor="mobilenumber" className="self-start font-sans font-semibold text-sm text-white">Mobile Number<span className="text-red-600"> *</span> :</label>
              <input type="number" id="mobilenumber" name="mobile_number" className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2" placeholder="Enter Your Mobile Number" required />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full bg-transparent placeholder-gray-600 bottom-2 gap-1">
              <label htmlFor="email" className="self-start font-sans font-semibold text-sm text-white">Email ID (Optional) :</label>
              <input type="email" id="email" name="email" className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2" placeholder="Enter Your Email ID" />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full bg-transparent placeholder-gray-600 bottom-2 gap-1">
              <label htmlFor="messagearea" className="self-start font-sans font-semibold text-sm text-white">Your Message <span className="text-red-600">*</span></label>
              <textarea id="messagearea" name="message" className="flex-grow w-full mx-auto h-full placeholder-gray-600 bg-white border-2 border-black focus:outline-none focus:border-gray-400 rounded-md p-2" placeholder="Your Message" required />
            </div>
            <div className="h-12 self-center w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
              <button type="submit" className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col items-center md:items-start md:w-1/3 h-[60%] mt-0 md:mt-20 gap-2">
        <div className="flex flex-row items-end">
          <img src="/icons/call-icon.png" alt="call-icon" className="h-10 md:h-40 w-10 md:w-40" />
          <span className="font-semibold text-3xl text-[#fac53b]">Call On</span>
        </div>
        <h1 className="text-white font-black text-2xl md:text-5xl font-sans">+91 77450 81111</h1>
        <p className="text-[#fac53b] font-semibold text-lg md:text-3xl font-sans tracking-tighter">
          to directly connect with the
          office of
        </p>
        <span className="text-white font-semibold text-xl md:text-3xl font-sans tracking-tighter underline pb-20 md:pb-0">MLA Yashomati Chandrakant Thakur</span>
      </div>
    </section>
  );
};

export default ConnectSection;
