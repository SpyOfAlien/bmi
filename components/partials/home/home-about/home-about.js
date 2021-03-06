import Container from "../../../layout/container";
import Slider from "../../../ui/slider/slider";
import Image from "next/image";
import { useState } from "react";
import Button from "../../../ui/button/button";
import Verified from "../../../icons/verified";
import { useRouter } from "next/dist/client/router";

const HomeAbout = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();

  const aboutSlider = [
    {
      img: "/assets/images/common/certificate.jpg",
      desc: "Chứng chỉ chất lượng",
      imgW: 601,
      imgH: 400,
    },
    {
      img: "/assets/images/common/certificate.jpg",
      desc: "Chứng chỉ chất lượng 1",
      imgW: 601,
      imgH: 400,
    },
    {
      img: "/assets/images/common/certificate.jpg",
      desc: "Chứng chỉ chất lượng 2",
      imgW: 601,
      imgH: 400,
    },
  ];

  const aboutSliderContent = [
    {
      title: "Đang cập nhật ...",
      desc:
        "BMI chuyên cung cấp các giải pháp nhựa Compound, đáp ứng theo yêu cầu cụ thể của mỗi khách hàng. Ngoài ra chúng tôi cũng nhập khẩu, thương mại các loại nhựa nguyên sinh và tái sinh",
    },
    {
      title: "Đang cập nhật ...",
      desc:
        "BMI chuyên cung cấp các giải pháp nhựa Compound, đáp ứng theo yêu cầu cụ thể của mỗi khách hàng. Ngoài ra chúng tôi cũng nhập khẩu, thương mại các loại nhựa nguyên sinh và tái sinh",
    },
    {
      title: "Đang cập nhật ...",
      desc:
        "BMI chuyên cung cấp các giải pháp nhựa Compound, đáp ứng theo yêu cầu cụ thể của mỗi khách hàng. Ngoài ra chúng tôi cũng nhập khẩu, thương mại các loại nhựa nguyên sinh và tái sinh",
    },
  ];

  const advantages = [
    {
      title: "Khách hàng là trọng tâm",
      desc:
        "BMI luôn đặt mình vào vị trí của khách hàng trong mọi suy nghĩ, hành động để mang lại lợi ích và trải nghiệm tốt nhất cho khách hàng",
    },
    {
      title: "Đổi mới và sáng tạo",
      desc: `Để luôn dẫn đầu, BMI luôn sẵn sàng đón nhận và dẫn dắt sự thay đổi hưởng đến cách làm mới tạo ra kết quả mới, cách làm đột phá tạo ra kết quả vượt trội`,
    },
    {
      title: "Làm việc hiệu quả",
      desc: `Mọi hành động đều hưởng tới kết quả cụ thể, rõ ràng, BMI làm việc có kế hoạch và kỷ luật thực thi, đảm bảo phân bổ và tối ưu hoá nguồn lực phù hợp tốt nhất`,
    },
  ];

  const handleSlideChange = (idx) => {
    setActiveSlide(idx);
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row mb-32">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="400"
          className="w-full lg:w-1/2 pr-8 mb-16 lg:mb-0"
        >
          <h6 className="uppercase font-normal mb-2">Về chúng tôi</h6>
          {aboutSliderContent.map((item, idx) => (
            <div key={idx}>
              {idx === activeSlide && (
                <div className="mb-6">
                  {/* <h3 className="text-h3 font-semibold tracking-wide mb-4">
                    {item.title}
                  </h3> */}
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}

          <Button onClickBtn={() => router.push("/about")}>Xem thêm</Button>
        </div>
        <div className="w-full lg:w-1/2 grid items-center">
          <Slider
            slides={aboutSlider}
            onSlideChange={(idx) => handleSlideChange(idx)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
        {advantages.map((item, idx) => (
          <div
            data-aos="fade-up"
            data-aos-delay={300 + idx * 100}
            key={idx}
            className="text-center w-full md:w-1/2 lg:w-1/3 mb-8 lg:mb-0 px-4 lg:pr-4"
          >
            <span className="mb-4 flex justify-center">
              <Verified />
            </span>
            <h6 className="mb-4 text-h6 uppercase font-semibold tracking-tight">
              {item.title}
            </h6>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeAbout;
