import React, { useState } from 'react';
import tastemaker from '../../assets/images/carousel/ultimate-tastemakers.png';
import balance from '../../assets/images/carousel/ultimate-balance.png';
import journeys from '../../assets/images/carousel/ultimate-journeys.png';
import delights from '../../assets/images/carousel/ultimate-delights.png';
import moments from '../../assets/images/carousel/ultimate-moments.png';
import dedication from '../../assets/images/carousel/ultimate-dedication.png';
import './styles.css';

const CarouselPanel = ({ privilege, title, subLine, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  let imageurl = tastemaker;
  switch (privilege) {
    case 'balance':
      imageurl = balance;
      break;
    case 'journeys':
      imageurl = journeys;
      break;
    case 'dedication':
      imageurl = dedication;
      break;
    case 'delights':
      imageurl = delights;
      break;
    case 'moments':
      imageurl = moments;
      break;
    case 'tastemaker':
    case 'indulgence':
      imageurl = tastemaker;
      break;
    default:
      imageurl = tastemaker;
      break;
  }

  return (
    <div
      className={`flip-container inline-block rounded-xl shadow-lg hover:shadow-gold/50 transition duration-300 ease-in-out cursor-pointer ${
        isFlipped ? 'flipped' : ''
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flipper">
        <button
          type="button"
          aria-label={`${title} ${subLine}`}
          style={{ backgroundImage: `url(${imageurl})` }}
          className="inline-block rounded-xl bg-no-repeat bg-left-top panelHolder bg-black/30 shadow-lg hover:shadow-gold/50 transition duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <h5 className="text-2xl text-white opacity-80 font-light tracking-custom leading-8 smallerTitle">
                {title}
              </h5>
              <h5 className="text-2xl text-white opacity-80 font-light tracking-custom leading-8 smallerTitle">
                {subLine}
              </h5>
            </div>
          </div>
        </button>
        <div className="back panelHolder bg-black rounded-xl p-4">
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <p
                className="text-sm md:text-lg text-base text-white opacity-80 font-light tracking-custom md:leading-8"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPanel;
