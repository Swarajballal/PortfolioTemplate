import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';

const Initiatives = () => {
    return (
        <>
            <section className='relative top-0 left-0' style={{ backgroundImage: "url('./img/global-desktop.jpg')", backgroundSize: 'cover', backgroundColor: '#D5D5D5' }}>

                <div className='h-full w-full flex justify-center'>
                    <NavBar />
                </div>

                <div className='flex flex-col md:flex-row w-[90%] mt-10 md:mt-32 mx-auto pb-14 md:pb-0'>
                    <img src="./img/Yashomati Thakur HD.webp" className="w-[80%] md:w-[30%] mx-auto md:mx-0" alt="profile-header" />

                    <div className='m-auto text-center md:text-start mt-4 md:mt-0'>
                        <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-violet-900 to-blue-600 bg-clip-text text-transparent">Initiatives</h1>
                        <p className='text-lg md:text-xl text-white'>Empowering Communities, Inspiring Change</p>
                    </div>
                </div>

                <img src="./img/slider-bottom.png" className="w-full h-20 md:h-28 -mt-12 md:-mt-24" alt="profile-header" />
            </section>

            <section>
                <div className='w-[90%] md:w-3/5 text-start mx-auto p-2 md:p-0'>
                    <p className=" mt-6">
                        Smt. Yashomati Thakur has undertaken numerous initiatives aimed at the holistic development of her constituency and the broader community in Maharashtra. As the Minister for Women and Child Development and the Guardian Minister of Amravati district, she has implemented policies that focus on the welfare of women and children, including programs to combat gender-based violence, improve women's health, and support female entrepreneurship. Her efforts extend to establishing health camps and mobile clinics to enhance access to medical services, particularly for the underprivileged, and improving educational infrastructure to ensure quality education for all children, especially in rural areas.
                    </p>

                    <p className="mt-6">
                        These initiatives aim to create a more equitable society where every individual has the opportunity to thrive. In addition to her work in social welfare, Yashomati Thakur has also focused on improving the agricultural sector, advocating for fair pricing and better irrigation facilities to support farmers. She has promoted sustainable agricultural practices to ensure long-term food security and economic stability for farming communities.
                    </p>

                    <p className="mt-6">
                        Her governance approach emphasizes transparency, accountability, and public participation, aiming to build trust between the government and the citizens. She supports economic development through policies that encourage industrial growth, infrastructure investment, and job creation, with a particular focus on small and medium enterprises.
                    </p>

                    <p className="mt-6">
                        Her environmental initiatives include water conservation projects, promoting rainwater harvesting, and rejuvenating water bodies to ensure a sustainable water supply for various uses. Through these comprehensive efforts, she aims to foster progress, unity, and inclusive development across Maharashtra.
                    </p>
                </div>

                <div className="h-10 my-5 w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5 mx-auto">
                    <a href="https://www.youtube.com/@ThakurYashomati" target="_blank" rel="noopener noreferrer" className="flex h-full w-full items-center justify-center bg-white rounded-full px-5 md:px-10 text-sm md:text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
                        SUBSCRIBE US
                    </a>
                </div>

                <img src="./img/footer-top.png" alt="" className="w-full" />

            </section>

            <Footer />

        </>
    );
};

export default Initiatives;
