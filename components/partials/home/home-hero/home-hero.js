import Image from "next/image";
import Right from "../../../icons/right";
import s from "./home-hero.module.css";
import cn from "classnames";

const HomeHero = () => {
  const sections = [
    {
      img: "/assets/images/hero/home/factory.png",
      override: {
        title: "Về chúng tôi",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
    {
      img: "/assets/images/hero/home/product.png",
      override: {
        title: "Sảm phẩm",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
    {
      img: "/assets/images/hero/home/office.png",
      override: {
        title: "Liên hệ",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {sections.map((item, idx) => (
        <div
          key={idx}
          className={cn("relative w-full lg:w-1/3", {
            [s.heroOne]: idx === 0,
            [s.heroTwo]: idx === 1,
            [s.heroThree]: idx === 2,
          })}
        >
          <div className="w-full">
            <Image
              src={item.img}
              width={640}
              height={928}
              layout="responsive"
            />
          </div>

          <div
            className={cn(
              "absolute inset-0 bg-green-9 bg-opacity-60 flex items-end px-12 py-24"
            )}
          >
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white text-h3 font-semibold"
            >
              {item.override.title}
            </h3>

            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 h-72 flex",
                s.override
              )}
            >
              <div className="bg-white w-11/12 px-8 pt-12">
                <h4 className="text-h4 font-semibold mb-4 lg:mb-8">
                  {item.override.title}
                </h4>
                <p>{item.override.content}</p>
              </div>
              <div className="flex items-end" style={{ width: "50px" }}>
                <span
                  className="bg-yellow flex justify-center items-center w-full"
                  style={{ height: "50px" }}
                >
                  <Right width="25px" height="25px" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomeHero;
