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

      <div className="bg-gray w-full h-72 mb-4"></div>

      <p className="mb-4">
        BMI chuyên cung cấp các giải pháp nhựa Compound, đáp ứng theo yêu cầu cụ
        thể của mỗi khách hàng. Ngoài ra chúng tôi cũng nhập khẩu, thương mại
        các loại nhựa nguyên sinh và tái sinh
      </p>

      <div className="flex flex-col md:flex-row">
        <p className="w-full md:w-1/2">
          Đối tượng khách hàng của BMI là các doanh nghiệp trong khối FDI và
          xuất khẩu ra nước ngoài. Do đó, công ty chú trọng đến đầu tư nhà xưởng
          đạt chuẩn, dây truyền sản xuất hiện đại và đào tạo đối ngũ kỹ thuật
          viên bài bản, chuyên nghiệp.
        </p>
        <div className="w-full md:w-1/2 bg-gray"></div>
      </div>
    </div>
  );
};
export default AboutBmi;
