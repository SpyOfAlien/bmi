import cn from "classnames";
import Image from "next/image";

const AboutVision = () => {
  return (
    <div>
      <h6 className="text-h6 font-semibold mb-4">
        TẦM NHÌN - SỨ MỆNH VÀ GIÁ TRỊ CỐT LÕI
      </h6>
      <div className="p-4 bg-green-8 bg-opacity-20 mb-12">
        <p>
          Công ty Cổ Phần BMI Polymer được thành lập năm 2020, trụ sở tại lô
          CN12A, CCN Khánh Thượng, xã Khánh Thượng, huyện Yên Mô, tỉnh Ninh Bình
        </p>
      </div>

      <div>
        <div className="relative">
          <section className="mb-12">
            <h6 className="text-h6 font-semibold mb-4">Tầm nhìn</h6>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <p className="mb-2">
                  <b>Mặt hàng:</b> Chủ trọng phát triển mảng hạt nhựa Compound;
                  Công ty Cổ Phần BMI Polymer được thành lập năm 2020, trụ sở
                  tại lô CN12A, CCN Khánh Thượng, xã Khánh Thượng, huyện Yên Mô,
                  tỉnh Ninh Bình
                </p>
                <p className="mb-2">
                  <b>Diện tích nhà xưởng: </b>Mở rộng nhà xưởng và chi nhánh
                  miền Nam.
                </p>
                <p className="mb-2">
                  <b>Đối tượng khách hàng: </b>Các công ty trong khối FDI và
                  Xuất khẩu đi nước ngoài.
                </p>
                <p className="mb-2">
                  <b>Đến năm 2025: </b>nằm trong top 10 Doanh nghiệp về sản xuất
                  hạt nhựa compound trên thị trường Việt Nam; đến năm 2030 trở
                  thành Doanh nghiệp nằm top 3 và vươn ra thế giới.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full px-4">
                  <Image
                    src="/assets/images/about/vision/vision-one.png"
                    width={1280}
                    height={620}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h6 className="text-h6 font-semibold mb-4">Sứ Mệnh</h6>
            <div className="flex flex-col lg:flex-row-reverse">
              <p className="w-full lg:w-1/2 pl-4">
                Cung cấp những sản phẩm nhựa compound tốt nhất, tạo dựng giá trị
                bền vững cho khách hàng, nhân viên và công đồng.
              </p>
              <div className="w-full lg:w-1/2">
                <div className="w-full">
                  <Image
                    src="/assets/images/about/vision/vision-two.png"
                    width={1280}
                    height={620}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h6 className="text-h6 font-semibold mb-4">Giá Trị Cốt Lõi</h6>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <p className="mb-2">
                  Khách hàng là trọng tâm: "Vì chúng ta chỉ thành công khi khách
                  hàng thành công" BMI luôn coi khách hàng là trọng tâm trong
                  mọi suy nghĩ và hành động. BMI luôn đặt mình vào vị trí của
                  khách hàng trong mọi suy nghĩ, hành động để mang lại lợi ích
                  và trải nghiệm tốt nhất cho khách hàng.
                </p>
                <p className="mb-2">
                  Đổi mới và sáng tạo: "Để luôn dẫn đầu". Toàn thể cán bộ nhân
                  viên luôn sẵn sàng đón nhận và dẫn dắt sự thay đổi hưởng đến
                  cách làm mới tạo ra kết quả mới, cách làm đột phá tạo ra kết
                  quả vượt trội.
                </p>
                <p>
                  Làm việc hiệu quả: "Để mang lại thành công lớn hơn với nguồn
                  lực phù hợp". Với mục tiểu "Mọi hành động đều hưởng tới kết
                  quả cụ thể, rõ ràng, chúng tôi luôn làm việc có kế hoạch và kỷ
                  luật thực thi, đảm bảo phân bổ và tối ưu hoá nguồn lực.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full px-4">
                  <Image
                    src="/assets/images/about/vision/vision-three.png"
                    width={1280}
                    height={620}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
