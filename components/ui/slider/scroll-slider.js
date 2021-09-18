import Image from "next/image";
import Right from "../../icons/right";

const ScrollSlider = ({ slides }) => {
  return (
    <div className="flex overflow-auto">
      {/* {slides.map((item, idx) => (
        <div key={idx} className="relative w-96 mx-2 cursor-pointer">
          <div className="relative w-full">
            <Image
              src={item.img}
              width={item.imgW}
              height={item.imgH}
              layout="responsive"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex h-4/5">
            <div className="bg-white w-11/12">
              <h5 className="text-h5 font-semibold mb-8">
                {item.override.title}
              </h5>
              <p className="font-normal opacity-70">{item.override.desc}</p>
            </div>
            <div className="flex items-end">
              <span className="w-full bg-yellow p-2">
                <Right width="25px" height="25px" />
              </span>
            </div>
          </div>
        </div>
      ))} */}

      <div className="">
        <div className="flex overflow-auto">
          <div className="w-96 h-48 bg-yellow">d</div>
          <div className="w-96 h-48 bg-yellow">x</div>
          <div className="w-96 h-48 bg-yellow">q</div>
          <div className="w-96 h-48 bg-yellow">wq</div>
          <div className="w-96 h-48 bg-yellow">w</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
