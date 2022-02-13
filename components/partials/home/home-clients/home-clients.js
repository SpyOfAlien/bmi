import Container from "../../../layout/container";
import Image from "next/image";
import cn from "classnames";
import useWindowSize from "../../../../utils/hooks/useWindowSize";
import Slider from "react-slick";

const HomeClients = () => {
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
    dots: false,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    className: "product",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {clientsOne.map((item, idx) => (
          <div
            key={idx}
            className="p-2 mb-2"
            style={{
              width: w >= 1024 ? "16.6%" : w > 700 ? "32%" : "calc(50% - 4px)",
              marginBottom: w >= 1024 ? 0 : "8px",
              marginRight: w >= 1024 ? "25px" : "4px",
            }}
          >
            <Image src={item} width={250} height={175} layout="responsive" />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {clientsTwo.map((item, idx) => (
          <div
            key={idx}
            className="p-2 mb-2"
            style={{
              width: w >= 1024 ? "16.6%" : w > 700 ? "32%" : "calc(50% - 4px)",
              marginBottom: w >= 1024 ? 0 : "8px",
              marginRight: w >= 1024 ? "25px" : "4px",
            }}
          >
            <Image src={item} width={217} height={100} layout="responsive" />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default HomeClients;
