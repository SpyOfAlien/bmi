import cn from "classnames";
import Image from "next/image";

const AboutHistory = () => {
  const historyPoint = [
    {
      time: "March 2010",
      event: "Thành lập Công ty CP Công nghệ Nhựa Việt nam",
      url: "",
    },
    {
      time: "2013",
      event:
        "Thành lập Công ty TNHH Sản xuất và Thương mại Việt Nam Phát Triển ",
      url: "",
    },
    {
      time: "2015",
      event: "Thành lập Công ty TNHH Công nghiệp và Dịch vụ Bình Minh",
      url: "",
    },
    {
      time: "2017",
      event: "Thành lập Chi nhánh ở Vũng Tàu",
      url: "",
    },
    {
      time: "2018",
      event: "Mở rộng nhà máy ở Ninh Bình lên 10,000m2",
      url: "",
    },
    {
      time: "2020",
      event: "Thành lập Công ty Cổ phần Bình Minh Polymer",
      url: "",
    },
  ];

  return (
    <div>
      <h6 className="text-h6 font-semibold mb-4">Lịch sử hình thành</h6>
      <div className="p-4 bg-green-8 bg-opacity-20 mb-8">
        <p>
          BMI thành lập năm 2010 với tiền thân là Công ty Cổ phần Công nghệ Nhựa
          Việt Nam. Trải qua hơn 10 năm xây dựng và phát triển, năm 2020 chính
          thức đổi tên thành Công ty Cổ phần Bình Minh Polymer.
        </p>
      </div>

      <div>
        <h6 className="text-h6 text-green-5 text-center font-semibold mb-4">
          Quá trình hình thành
        </h6>

        <div className="relative">
          <div className="absolute w-2 h-full left-1/2 transform -translate-x-1/2"></div>

          {historyPoint.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "flex mb-8 flex-col h-48 lg:flex-row",
                idx % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className="w-full lg:w-1/2 p-4">
                <p className="font-semibold">{item.time}</p>
                <p>{item.event}</p>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                {/* <Image
                  src={item.url}
                  width={200}
                  height={120}
                  layout="responsive"
                /> */}
                <div className="bg-green-5 w-full h-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
