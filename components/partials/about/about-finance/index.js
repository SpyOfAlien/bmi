import Image from "next/image";

const AboutFinance = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-full lg:w-1/2">
          <p>Vốn điều lệ: 50 tỷ VNĐ (Năm mươi tỷ Việt Nam Đồng)</p>
          <h6>Doanh thu tăng trưởng theo năm:</h6>
          <ul>
            <li>- 2018: 20%</li>
            <li>- 2019: 30%</li>
            <li>- 2020: 90%</li>
          </ul>
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
