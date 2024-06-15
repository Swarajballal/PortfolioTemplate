import React, { useState } from 'react';
import FocusAreaItem from '@/components/FocusArea/FocusAreaItem';
import MainFocusArea from '@/components/FocusArea/MainFocusArea';

const focusAreaItems = ['Youth', 'Women', 'Farmer', 'Education', 'HealthCare', 'Good Governance', 'Economy', 'Water'];

const HomeFocusArea = () => {
  const [active, setActive] = useState('Youth');

  return (
    <section className="flex flex-col w-full" style={{ backgroundImage: "url('./img/focus-area-bg.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#EAEAEA' }}>
      <div className="flex flex-col items-center">
        <img src="./img/down.png" alt="down-arrow-profile-header" className="h-8 w-2" />
        <h4 className="text-lg font-semibold">Let's Work Together</h4>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-900 to-blue-600 ... bg-clip-text text-transparent font-sans">FOCUS AREAS</h1>
      </div>
      <div className="w-[90%] mx-auto mt-10">
        <div className="grid grid-cols-8 gap-9">
          {focusAreaItems.map((item) => (
            <FocusAreaItem
              key={item}
              label={item}
              active={active === item}
              onClick={() => setActive(item)}
            />
          ))}
        </div>
      </div>
      <div className="w-4/5 flex mx-auto gap-10 justify-center items-center mt-14">
        <MainFocusArea label={active} showImage={true} />
      </div>
    </section>
  );
};

export default HomeFocusArea;
