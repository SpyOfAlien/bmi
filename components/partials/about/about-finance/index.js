import Image from "next/image";

const AboutFinance = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-full lg:w-1/2">
          <p>Vốn điều lệ: 50 tỷ VNĐ (Năm mươi tỷ Việt Nam Đồng)</p>
        </div>

        <div className="w-full lg:w-1/2" style={{ width: "300px" }}>
          <Image
            src="/assets/images/about/finance.png"
            width={408}
            height={577}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFinance;
