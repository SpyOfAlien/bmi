import { useState, Children } from "react";
import Right from "../../icons/right";
import Left from "../../icons/left";
import Image from "next/image";

const SlideItem = ({ slideData, onSlideChange }) => {
  return (
    <div className="relative">
      <div className="w-full">
        <Image
          src={slideData.img}
          width={slideData.imgW}
          height={slideData.imgH}
          layout="responsive"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex h-12 justify-between items-center">
        <p className="text-center pl-4 h-full w-full flex items-center bg-green-8 opacity-50">
          {slideData.desc}
        </p>
        <div className="flex opacity-100">
          <span
            className="bg-white transition-all duration-800 ease-in-out hover:bg-yellow h-full p-4 cursor-pointer"
            onClick={() => onSlideChange("next")}
          >
            <Left width="20px" height="20px" />
          </span>
          <span
            className="bg-white  transition-all duration-800 ease-in-out hover:bg-yellow h-full p-4 cursor-pointer"
            onClick={() => onSlideChange("prev")}
          >
            <Right width="20px" height="20px" />
          </span>
        </div>
      </div>
    </div>
  );
};

const Slider = ({ slides, onSlideChange }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (dir) => {
    if (dir === "prev" && activeSlide > 0) {
      onSlideChange(activeSlide - 1);
      setActiveSlide(activeSlide - 1);
    }
    if (dir === "next" && activeSlide < slides.length - 1) {
      onSlideChange(activeSlide + 1);
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div>
      {slides.map((item, idx) => (
        <div key={idx}>
          {idx === activeSlide && (
            <SlideItem
              onSlideChange={(dir) => handleSlideChange(dir)}
              slideData={item}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
