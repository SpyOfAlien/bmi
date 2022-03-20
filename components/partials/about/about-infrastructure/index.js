import Image from "next/image";

const AboutInfrastructure = () => {
  return (
    <div>
      <p>Trước tháng 8 năm 2022 công suất là 18,000 tấn/ năm</p>
      <p>Sau tháng 8 năm 2022 công suất thiết kế là 72,000 tấn/ năm</p>

      <div>
        <p className="mb-8">Một số hình ảnh máy móc trang thiết bị</p>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-one.jpg"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-two.jpg"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-three.png"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-four.png"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-five.jpg"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-six.jpg"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-seven.jpg"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-eight.jpg"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-nigh.jpg"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutInfrastructure;
