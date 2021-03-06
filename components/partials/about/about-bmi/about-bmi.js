import Image from "next/image";

const AboutBmi = () => {
  return (
    <div>
      <h6 className="text-h6 font-semibold mb-4">Giới thiệu về chúng tôi</h6>
      <div className="p-4 bg-green-8 bg-opacity-20 mb-4">
        <p>
          Công ty Cổ Phần BMI Polymer được thành lập năm 2020, trụ sở tại lô
          CN12A, CCN Khánh Thượng, xã Khánh Thượng, huyện Yên Mô, tỉnh Ninh Bình
        </p>
      </div>

      <div className="w-full mb-4">
        <Image
          src="/assets/images/about/resources/grandopen.png"
          width={725}
          height={484}
          layout="responsive"
        />
      </div>

      <p className="mb-4">
        BMI chuyên cung cấp các giải pháp nhựa Compound, đáp ứng theo yêu cầu cụ
        thể của mỗi khách hàng. Ngoài ra chúng tôi cũng nhập khẩu, thương mại
        các loại nhựa nguyên sinh và tái sinh
      </p>

      <div className="flex flex-col md:flex-row">
        <p className="w-full md:w-1/2">
          Công ty Cổ Phần BMI Polymer được thành lập năm 2020, trụ sở tại lô
          CN12A, CCN Khánh Thượng, xã Khánh Thượng, huyện Yên Mô, tỉnh Ninh Bình
        </p>
        <div className="w-full">

        <Image
          src="/assets/images/about/resources/plasticbox.png"
          width={725}
          height={484}
          layout="responsive"
        />
        </div>
      </div>
    </div>
  );
};
export default AboutBmi;
