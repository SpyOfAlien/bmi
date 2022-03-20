import Image from "next/image";
import Slider from "react-slick";
import useWindowSize from "../../../../utils/hooks/useWindowSize";

const AboutPartner = () => {
  const { w, h } = useWindowSize();

  const clientsOne = [
    "/assets/images/clients/01.png",
    "/assets/images/clients/02.png",
    "/assets/images/clients/03.png",
    "/assets/images/clients/04.png",
    "/assets/images/clients/05.png",
    "/assets/images/clients/06.png",
    "/assets/images/clients/07.png",
    "/assets/images/clients/08.png",
  ];
  const clientsTwo = [
    "/assets/images/clients/09.png",
    "/assets/images/clients/10.png",
    "/assets/images/clients/11.png",
    "/assets/images/clients/12.png",
    "/assets/images/clients/13.png",
    "/assets/images/clients/14.png",
    "/assets/images/clients/15.png",
    "/assets/images/clients/16.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    swipeToSlide: true,
    className: "product",
    cssEase: "linear",
  };

  return (
    <div>
      <h6 className="text-h6 font-semibold mb-4">Đối tác của chúng tôi</h6>
      {/* <div className="p-4 bg-green-8 bg-opacity-20 mb-4">
        <p>Đang cập nhật</p>
      </div> */}

      <div className="py-8">
        <Slider {...settings}>
          <div className="flex flex-wrap">
            {clientsOne.map((item, idx) => (
              <div key={idx} className="shadow-md p-2 mb-2 mr-2 w-48% lg:w-32%">
                <Image
                  src={item}
                  width={217}
                  height={100}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap">
            {clientsTwo.map((item, idx) => (
              <div key={idx} className="shadow-md p-2 mb-2 mr-2 w-48% lg:w-32%">
                <Image
                  src={item}
                  width={217}
                  height={100}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default AboutPartner;
