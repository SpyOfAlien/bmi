import Container from "../../../layout/container";
import Image from "next/image";
import cn from "classnames";
import useWindowSize from "../../../../utils/hooks/useWindowSize";
import Slider from "react-slick";

const HomeClients = () => {
  const { w, h } = useWindowSize();

  const clients = [
    "/assets/images/clients/dragonet.png",
    "/assets/images/clients/hanel-plastics.png",
    "/assets/images/clients/jinyoung.png",
    "/assets/images/clients/samsung.png",
    "/assets/images/clients/sunhouse.png",
    "/assets/images/clients/tan-a.png",
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
        {clients.map((item, idx) => (
          <div
            key={idx}
            // className={cn(
            //   w >= 1024 ? "w-1/6 mr-8" : w >= 700 ? "w-1/3 mr-6" : "mr-2"
            // )}
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
