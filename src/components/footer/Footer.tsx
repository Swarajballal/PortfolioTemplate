import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row relative justify-around bg-[#353535] pb-5">
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between mx-auto">

        <div className="flex flex-col gap-2 text-start mb-5 md:mb-0">

          <h2 className="text-xs pt-3 md:pt-0 md:text-lg text-white font-bold font-sans tracking-tighter">FOLLOW MLA YASHOMATI CHANDRAKANT THAKUR FOR LIVE UPDATES</h2>

          <ul className="flex gap-4 text-lg md:text-3xl text-white">
            <li>
              <a href="https://www.instagram.com/advyashomatiinc/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/AdvYashomatiINC" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>

            <li>
              <a href="https://x.com/AdvYashomatiINC" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
              </a>
            </li>

            <li>
              <a href="https://in.linkedin.com/in/advyashomatithakur" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>

          <h3 className="text-xs md:text-sm text-white font-sans">© 2024. All rights reserved</h3>

        </div>

        <div className="flex flex-col gap-2 text-start">
          <p className="font-sans tracking-tighter text-xs md:text-base text-white">
            91, Ramgiri, Bhagya Nagar, <br />
            Ganediwal Layout, Camp Road,<br />
            Amravati, Maharashtra - 444602
          </p>

          <a href="tel:+917745081111" className="text-xs md:text-lg text-white font-bold font-sans tracking-tighter">+91 77450 81111</a>

          <a href="mailto:officeyashomati17@gmail.com" className="text-xs md:text-lg font-bold bg-gradient-to-r from-violet-400 to-blue-600 bg-clip-text text-transparent font-sans">officeyashomati17@gmail.com</a>

        </div>

      </div>
    </section>
  );
};

export default Footer;
