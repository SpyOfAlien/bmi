import Page from "../../components/layout/page";
import Image from "next/image";
import Input from "../../components/ui/input/input";
import useWindowSize from "../../utils/hooks/useWindowSize";
import RadioButton from "../../components/ui/radio-button/radio-button";

const SupportPage = () => {
  const { w, h } = useWindowSize();

  const onChangeAgreement = () => {};

  const onNameChange = () => {};
  const onEmailChange = () => {};
  const onPhoneChange = () => {};
  const onProductChange = () => {};
  const onCompanyChange = () => {};
  const onCompanyLocationChange = () => {};
  const onMessageChange = () => {};

  return (
    <Page>
      <div className="relative w-full text-white py-24">
        <div className="text-center w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto mb-8 lg:mb-24">
          <h4 className="text-h5 lg:text-h3 font-semibold mb-4">
            Support infomation
          </h4>
          <p>
            Chúng tôi ở đây để giúp đỡ! Đối với các yêu cầu bán hàng và thông
            tin chung, vui lòng hoàn thành biểu mẫu bên dưới. Chúng tôi sẽ liên
            hệ lại với bạn càng sớm càng tốt.
          </p>
        </div>
        <div className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto flex flex-col items-center bg-white shadow-md px-8 py-12">
          <div className="w-48 mb-16">
            <Image
              src="/assets/images/common/support-form-logo.png"
              width={236}
              height={180}
              layout="responsive"
            />
          </div>
          <div className="w-full mb-4">
            <div className="flex flex-col justify-between lg:flex-row lg:flex-wrap">
              <div className="w-full lg:w-48% mb-8 lg:mr-2">
                <Input
                  placeHolder="Họ và tên đầy đủ"
                  onInputChange={onNameChange}
                />
              </div>
              <div className="w-full lg:w-48% mb-8">
                <Input
                  placeHolder="Email của bạn"
                  onInputChange={onEmailChange}
                />
              </div>
              <div className="w-full lg:w-48% mb-8 lg:mr-2">
                <Input
                  placeHolder="Số điện thoại"
                  onInputChange={onPhoneChange}
                />
              </div>
              <div className="w-full lg:w-48% mb-8">
                <Input
                  placeHolder="Sản phẩm muốn"
                  onInputChange={onProductChange}
                />
              </div>
              <div className="w-full lg:w-48% mb-8 lg:mr-2">
                <Input
                  placeHolder="Tên công ty"
                  onInputChange={onCompanyChange}
                />
              </div>
              <div className="w-full lg:w-48% mb-8">
                <Input
                  placeHolder="Địa chỉ công ty"
                  onInputChange={onCompanyLocationChange}
                />
              </div>
            </div>

            <div>
              <textarea
                className="border border-solid border-input rounded-xs w-full p-4"
                rows="6"
                placeholder="Tin nhắn của bạn"
                onChange={onMessageChange}
              ></textarea>
            </div>
          </div>

          <div className="mb-4">
            <RadioButton onCheck={onChangeAgreement}>
              Có, tôi đồng ý nhận email từ BMI và các chi nhánh của BMI. Tôi có
              thể chọn không tham gia bất cứ lúc nào.
            </RadioButton>
          </div>

          <div className="text-black-9 mb-8">
            Bằng cách gửi biểu mẫu này, bạn xác nhận rằng bạn đã đọc, hiểu và
            đồng ý với Điều khoản & Điều kiện và Chính sách Bảo mật.
          </div>

          <div className=" flex justify-end w-full">
            <button className="text-white font-semibold bg-green-9 px-8 py-3 rounded-xs">
              Xác nhận & Gửi
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 z-negative">
          <div className="w-full">
            <Image
              src="/assets/images/common/support-bg.png"
              width={1920}
              height={1295}
              layout="responsive"
              quality={50}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-negative"></div>
        <div className="w-full">
          <Image
            src="/assets/images/common/dot-bg.png"
            width={1920}
            height={512}
            layout="responsive"
          />
        </div>
      </div>
    </Page>
  );
};

export default SupportPage;
