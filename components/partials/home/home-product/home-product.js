import Container from "../../../layout/container";
import ScrollSlider from "../../../ui/slider/scroll-slider";
import Slider from "react-slick";
import Right from "../../../icons/right";
import Image from "next/image";
import cn from "classnames";
import s from "./home-product.module.css";

const HomeProduct = () => {
  const products = [
    {
      img: "/assets/images/products/green.png",
      imgW: 730,
      imgH: 487,
      override: {
        title: "Tittle of subject product 1",
        desc:
          "Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      },
    },
    {
      img: "/assets/images/products/black.png",
      imgW: 730,
      imgH: 487,
      override: {
        title: "Tittle of subject product 2",
        desc:
          "Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      },
    },
    {
      img: "/assets/images/products/yellow.png",
      imgW: 730,
      imgH: 487,
      override: {
        title: "Tittle of subject product 3",
        desc:
          "Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      },
    },
    {
      img: "/assets/images/products/brown.png",
      imgW: 730,
      imgH: 487,
      override: {
        title: "Tittle of subject product 4",
        desc:
          "Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      },
    },
    {
      img: "/assets/images/products/green.png",
      imgW: 730,
      imgH: 487,
      override: {
        title: "Tittle of subject product 5",
        desc:
          "Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
      },
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    className: "product",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container cl="flex flex-col items-end mb-6">
        <p className="mb-2">Our Products</p>
        <h6 className="text-h3 font-semibold">Sản phẩm</h6>
      </Container>
      <div>
        <Slider {...settings}>
          {products.map((item, idx) => (
            <div
              key={idx}
              className={cn("relative shadow-md", {
                [s.p0]: idx === 0,
                [s.p1]: idx === 1,
                [s.p2]: idx === 2,
                [s.p3]: idx === 3,
                [s.p4]: idx === 4,
              })}
            >
              <div className="w-full">
                <Image
                  src={item.img}
                  width={item.imgW}
                  height={item.imgH}
                  layout="responsive"
                />
              </div>

              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 flex h-3/5 ",
                  s.overlay
                )}
              >
                <div className="bg-white w-11/12 pl-4 pt-4">
                  <h5 className="text-h5 font-semibold mb-8">
                    {item.override.title}
                  </h5>
                  <p className="font-normal opacity-70">{item.override.desc}</p>
                </div>
                <div className="flex items-end">
                  <span className="w-full bg-yellow p-2">
                    <Right width="28px" height="28px" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeProduct;
