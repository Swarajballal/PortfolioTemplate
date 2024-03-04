import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';
import { useNavigate } from 'react-router-dom';


const Initiatives = () => {

    const navigate = useNavigate();
  return (
    <>
         <section className='relative top-0 left-0' style={{ backgroundImage: "url('./img/global-desktop.jpg')", backgroundSize: 'cover', backgroundColor: '#D5D5D5' }}>

        <div className=' h-full w-full flex justify-center'>
            <NavBar />
        </div>

        <div className='flex w-[90%] mt-32 mx-auto'>
            <img src="./img/Yashomati Thakur HD.png" className="w-[30%]" alt="profile-header" />

            <div className='m-auto text-start'>
                <h1 className="text-5xl font-black bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent">Initiatives</h1>
                <p className='text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

        <img src="./img/slider-bottom.png" className="w-full h-28 -mt-24" alt="profile-header" />
        </section>

        <section>
        <div className='w-3/5 text-start mx-auto'>  
            <p className="text-start mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel nisl auctor, blandit lacus id, aliquet lorem. Nullam non risus at sapien cursus aliquet. Sed auctor, justo in dignissim cursus, quam mauris varius sem, et aliquet neque lorem nec nunc. Mauris non ligula suscipit, volutpat mauris id, consequat mauris. Integer in tellus non mauris mollis aliquam. Curabitur a nunc non lectus fringilla bibendum vitae sed turpis. Cras aliquet, sem a lobortis pellentesque, quam lorem feugiat sem, ac condimentum ligula ipsum a dolor Integer in tellus non mauris mollis aliquam. Curabitur a nunc non lectus fringilla bibendum vitae sed turpis.feugiat sem, ac condimentum ligula ipsum a dolor Integer in tellus non mauris mollis aliquam. Curabitur a nunc non lectus fringilla bibendum vitae sed turpis.
            </p>

            <p className="text-start mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel nisl auctor, blandit lacus id, aliquet lorem. Nullam non risus at sapien cursus aliquet. Sed auctor, justo in dignissim cursus, quam mauris varius sem, et aliquet neque lorem nec nunc. Mauris non ligula suscipit.
            </p>

            <p className="text-start mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel nisl auctor, blandit lacus id, aliquet lorem. Nullam non risus at sapien cursus aliquet. Sed auctor, justo in dignissim cursus, quam mauris varius sem, et aliquet neque lorem nec nunc. Mauris non ligula suscipit.justo in dignissim cursus, quam mauris varius sem, et aliquet neque lorem nec nunc. Mauris non ligula suscipit.
            </p>

            <p className="text-start mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel nisl auctor, blandit lacus id, aliquet lorem. Nullam non risus at sapien cursus aliquet. Sed auctor, justo in dignissim cursus, quam mauris varius sem, et aliquet neque lorem nec nunc. Mauris non ligula 
            </p>

        </div>

        <div className="h-10 my-5 w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5 mx-auto">
            <button onClick={() => {
                navigate('/about');
            }} className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-mono font-black tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
                SUBSCRIBE US
            </button>
        </div>

        <img src="./img/footer-top.png" alt="" className="w-full"/>
        
   </section>

   <Footer />

    </>
  );
};

export default Initiatives;