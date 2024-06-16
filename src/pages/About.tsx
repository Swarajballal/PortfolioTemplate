import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';


const About = () => {
  return (
    <>
      <section className='relative top-0 left-0 bg-cover bg-center bg-[#D5D5D5]' style={{ backgroundImage: "url('./img/global-desktop.jpg')" }}>
        <div className='h-full w-full flex justify-center'>
          <NavBar />
        </div>
        
        <div className='flex flex-col md:flex-row w-[90%] mt-6 md:mt-32 mx-auto items-center'>
          <img src="./img/Yashomati Thakur HD.webp" className="w-[60%] md:w-[30%]" alt="profile-header" />
          <div className='mt-4 md:mt-0 md:ml-8 text-center md:text-start'>
            <h1 className="text-2xl md:text-5xl font-black bg-gradient-to-r from-violet-900 to-blue-600 bg-clip-text text-transparent">Yashomati Chandrakant Thakur</h1>
            <p className='text-lg md:text-xl text-white mt-2 pb-16 md:pb-0'>Championing Compassionate Leadership and Progress for Over 15 Years</p>
          </div>
        </div>

        <img src="./img/slider-bottom.png" className="w-full h-16 md:h-28 -mt-16 md:-mt-24" alt="profile-header" />
      </section>

      {/* <---- Mid of about us ----> */}

      <section>
        <div className='w-[90%] md:w-2/5 mx-auto'>
          <img src="./img/about_us_main.webp" alt="about-full-video" className='w-full' />
        </div>
        <div className='w-[90%] text-center md:text-justify mx-auto mt-8'>
          <img src="./img/down.png" alt="down-arrow-profile-header" className="h-6 w-2 md:h-8 md:w-2 ml-36 md:ml-32" />
          <h4 className="text-lg font-semibold mt-4 md:mt-0">About the Personality</h4>
          <h1 className="text-xl md:text-4xl font-black bg-gradient-to-r from-violet-900 to-blue-600 bg-clip-text text-transparent">Yashomati Chandrakant Thakur</h1>
          <h4 className="font-semibold mt-1">Member of Maharashtra Legislative Assembly and AICC Secretary for Karnataka and Amravati</h4>

          <p className="text-center md:text-start mt-6">
            "Leadership is not about being in charge. It is about taking care of those in your charge."
          </p>

          <p className="text-start mt-6">
            Yashomati Chandrakant Thakur, a prominent figure in Maharashtra's political landscape, has carved a niche for herself through her unwavering dedication and compassionate leadership. Born in the Amravati district, she has been a member of the Maharashtra Legislative Assembly since 2009, representing the Teosa constituency. Her career is marked by significant contributions to women's rights and children's welfare, reflecting her commitment to social justice and community empowerment. As the former Minister for Women and Child Development and the Guardian Minister of Amravati, she has implemented numerous initiatives to uplift marginalized communities, showcasing her visionary approach to governance.
          </p>

          <p className="text-start mt-6">
            Her resilience and determination have remained steadfast. Her leadership style, characterized by empathy and a strong connection with her constituents, has earned her widespread respect and support. She continues to advocate for unity, progress, and inclusive development, embodying the essence of true leadership. Through her efforts, she inspires and empowers those around her, paving the way for a brighter and more equitable future in Maharashtra.
          </p>

          <p className="text-start mt-6">
            Beyond her political career, Yashomati Thakur is also known for her philanthropic efforts. She has been involved in various social initiatives, focusing on education, healthcare, and women's empowerment. Her efforts have significantly impacted the lives of many, providing them with opportunities for growth and development. Her dedication to social causes highlights her commitment to creating a better society.
          </p>

          <p className="text-start mt-6">
            Yashomati Thakur's vision for the future includes continued advocacy for marginalized communities and strengthening the social fabric of her constituency. She aims to introduce more comprehensive policies that address the root causes of poverty and inequality, ensuring sustainable development for all. Her forward-thinking approach and dedication to service make her a beacon of hope and a role model for aspiring leaders.
          </p>
        </div>

        <img src="./img/footer-top.png" alt="" className="w-full mt-8" />
      </section>

      <Footer />
    </>
  );
};

export default About;
