import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LazyLoad from 'react-lazyload';
import Spinner from '../ui/Spinner';
import '../../App.css';

const Gallery: React.FC = () => {
  const [images, setImages] = useState([
    './img/YT-photos-gallery-1.JPG',
    './img/YT-photos-gallery-2.JPG',
    './img/YT-photos-gallery-3.JPG',
    './img/YT-photos-gallery-4.JPG',
    './img/YT-photos-gallery-5.JPG',
    './img/YT-photos-gallery-6.JPG',
  ]);

  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMoreImages = () => {
    setClickCount(clickCount + 1);
    setLoading(true);

    setTimeout(() => {
      const newImages = [
        './img/YT-photos-gallery-1.JPG',
        './img/YT-photos-gallery-2.JPG',
        './img/YT-photos-gallery-3.JPG',
        './img/YT-photos-gallery-4.JPG',
        './img/YT-photos-gallery-5.JPG',
        './img/YT-photos-gallery-6.JPG',
      ];
      setImages([...images, ...newImages]);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-3 mt-3 w-[90%] justify-center">
        <TransitionGroup component={null}>
          {images.map((src, index) => (
            <CSSTransition key={index} timeout={200} classNames="fade-image">
              <LazyLoad
                height={200}
                offset={100}
                placeholder={<Spinner />}
              >
                <div>
                  <img src={src} alt="" className="object-cover w-full rounded-2xl hover:scale-105 transition duration-500 cursor-pointer" />
                </div>
              </LazyLoad>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      {clickCount < 1 && (
        <div className="flex justify-center w-full mt-3">
          <div className="h-12 self-center w-fit rounded-full bg-gradient-to-r from-violet-900 to-blue-600 p-0.5">
            <button
              onClick={loadMoreImages}
              className="flex h-full w-full items-center justify-center bg-white rounded-full px-10 text-base font-sans font-semibold tracking-tight hover:cursor-pointer hover:bg-transparent hover:text-white"
            >
              {loading ? <Spinner /> : 'See More'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
