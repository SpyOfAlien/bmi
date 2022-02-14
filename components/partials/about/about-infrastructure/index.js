import Image from "next/image";

const AboutInfrastructure = () => {
  return (
    <div>
      <p>Trước tháng 8 năm 2022 công suất là 150 tấn/ tháng</p>
      <p>
        Trước tháng 8 năm 2022 công suất là 150 tấn/ tháng Sau tháng 8 năm 2022
        công suất thiết kế là 7500 tấn/ tháng
      </p>

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
            src="/assets/images/about/infrastructure/bmi-infrastructure-three.jpg"
            width={1280}
            height={620}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 mx-auto mb-8">
          <Image
            src="/assets/images/about/infrastructure/bmi-infrastructure-four.jpg"
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
