
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex relative justify-around bg-[#353535] pb-5">
    <div className="w-[80%] flex justify-between">

        <div className="flex flex-col gap-2 text-start">

            <h2 className="text-lg text-white font-bold font-sans tracking-tighter">FOLLOW MLA YASHOMATI CHANDRAKANT THAKUR FOR LIVE UPDATES</h2>

            <ul className="flex gap-4 text-3xl text-white">
            <li>
                <FaInstagram  />
            </li>

            <li>
                <FaFacebook />
            </li>

            <li>
                <FaSquareXTwitter />
            </li>
            
            <li>
                <FaLinkedin />
            </li>

            </ul>

            <h3 className="text-sm text-white font-sans">© 2024. All rights reserved</h3>

        </div>

            <div className="flex flex-col gap-2 text-start -mt-10">
                <p className="font-sans tracking-tighter text-base text-white">Lorem ipsum dolor sit amet,<br/>
                Lorem ipsum dolor sit amet<br/>
                Lorem ipsum dolor sit amet <br/>
                </p>

                <h2 className="text-lg text-white font-bold font-sans tracking-tighter">+91 12345678</h2>

                <h3 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-blue-600 ... bg-clip-text text-transparent font-sans">email@xyz.com</h3>

            </div> 

        </div>
    </section>
  );
};

export default Footer;