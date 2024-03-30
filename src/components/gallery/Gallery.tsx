import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Gallery = () => {
  const [images, setImages] = useState([
    './img/YT-photos-gallery-1.JPG',
    './img/YT-photos-gallery-2.JPG',
    './img/YT-photos-gallery-3.JPG',
    './img/YT-photos-gallery-4.JPG',
    './img/YT-photos-gallery-5.JPG',
    './img/YT-photos-gallery-6.JPG',
  ]);

  const [clickCount, setClickCount] = useState(0);

  const loadMoreImages = () => {
    setClickCount(clickCount + 1);

    if (clickCount < 1) {
      const newImages = [
        './img/YT-photos-gallery-1.JPG',
        './img/YT-photos-gallery-2.JPG',
        './img/YT-photos-gallery-3.JPG',
        './img/YT-photos-gallery-4.JPG',
        './img/YT-photos-gallery-5.JPG',
        './img/YT-photos-gallery-6.JPG',
        './img/YT-photos-gallery-1.JPG',
        './img/YT-photos-gallery-2.JPG',
        './img/YT-photos-gallery-3.JPG',
        './img/YT-photos-gallery-4.JPG',
        './img/YT-photos-gallery-5.JPG',
        './img/YT-photos-gallery-6.JPG',
      ];
      setImages([...images, ...newImages]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-3 mt-3 w-[90%] justify-center">
        <TransitionGroup component={null}>
          {images.map((src, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="fade"
            >
              <div>
                <img src={src} alt="" className="object-cover w-full rounded-2xl hover:scale-105 transition duration-500 cursor-pointer" />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      {clickCount < 1 && (
        <div className="flex justify-center w-full">
          <div className="h-12 self-center w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5 mt-3">
            <button onClick={loadMoreImages} className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-sans font-semibold tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white">
              See More
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
