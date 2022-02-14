import Image from "next/image";
import Input from "../components/ui/input/input";
import RadioButton from "../components/ui/radio-button/radio-button";
import Page from "../components/layout/page";
import dynamic from "next/dynamic";
import LocationGreen from "../components/icons/location-green";
import EmailGreen from "../components/icons/email-green";
import PhoneGreen from "../components/icons/phone-green";
import { useRef, useEffect } from "react";
import useElementSize from "../utils/hooks/useElementSize";
import useWindowSize from "../utils/hooks/useWindowSize";
import { getAllProductForHome, getProductsByType } from "../graphql/product";

const MapWithNoSSR = dynamic(() => import("../components/ui/map/map"), {
  ssr: false,
});

const ContactPage = () => {
  const { w, h } = useWindowSize();

  const onNameChange = () => {};
  const onEmailChange = () => {};
  const onAgreeTerm = () => {};
  const onSubmit = () => {};

  const mapRef = useRef(null);

  const { width, height } = useElementSize(mapRef);

  return (
    <Page>
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 z-negative">
          <div className="w-full ">
            <Image
              src="/assets/images/common/dot-bg.png"
              width={1920}
              height={512}
              layout="responsive"
            />
          </div>
        </div>
        <div className="relative bg-green-9 bg-opacity-90">
          <div className="w-full z-negative">
            <Image
              src="/assets/images/hero/contact.png"
              width={1920}
              height={685}
              layout="responsive"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h3 className="text-h3 mb-4">Thông tin liên hệ</h3>
            <div className="h-1 bg-yellow w-1/5 mx-auto mb-4"></div>
            <p className="w-3/5 text-center mx-auto">
              Chúng tôi ở đây để giúp đỡ! Đối với các yêu cầu bán hàng và thông
              tin chung, vui lòng hoàn thành biểu mẫu bên dưới. Chúng tôi sẽ
              liên hệ lại với bạn càng sớm càng tốt.
            </p>
          </div>
        </div>
        <div className="relative mb-24 lg:mb-0 lg:bottom-24 w-11/12 mx-auto bg-white pt-16">
          <div className="flex flex-col lg:flex-row justify-between w-4/5 mx-auto shadow-lg p-4 relative top-32 lg:top-16 z-10 bg-white">
            <div className="w-full lg:w-1/3 flex mb-6 lg:mb-0">
              <span className="mr-2">
                <LocationGreen />
              </span>
              <div>
                <h6 className="text-h6 font-semibold mb-2">Factory</h6>
                <p>
                  Lô CN12A, CCN Khánh Thượng, Xã Khánh Thượng, xã Khánh Thượng,
                  huyện Yên Mô, tỉnh Ninh Bình, Việt Nam
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex mb-6 lg:mb-0">
              <span className="mr-2">
                <LocationGreen />
              </span>
              <div>
                <h6 className="text-h6 font-semibold mb-2">Office</h6>
                <p>
                  <b>Hà Nội:</b> No.10, Road 2.3, Gamuda Gardens Urban Area,
                  Tran Phu Ward, Hoang Mai District, Ha Noi, Viet Nam Văn phòng
                </p>
                <p>
                  <b>Đồng Nai:</b> Tầng 2, số 10, đường Phan Đăng Lưu, phường
                  Long Bình, thành phố Biên Hòa, Đồng Nai, Việt Nam.
                </p>
              </div>
            </div>

            <div>
              <div className="w-full lg:w-1/3 flex mb-2">
                <span className="mr-2">
                  <PhoneGreen />
                </span>
                <div>
                  <h6 className="text-h6 font-semibold mb-2">Contact</h6>
                  <p>(+84).984.097.525</p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex mb-6 lg:mb-0">
                <span className="mr-2">
                  <EmailGreen />
                </span>
                <div>
                  <h6 className="text-h6 font-semibold mb-2">Email</h6>
                  <p>info@bmipolymer.com.vn</p>
                </div>
              </div>
            </div>
          </div>
          <div ref={mapRef}>
            <MapWithNoSSR width={width} />
          </div>
        </div>
        <div className="flex flex-col mb-24">
          <h3 className="text-h5 text-center mb-12 font-semibold">
            Đăng ký nhận bản tin của chúng tôi
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center mb-8 lg:w-4/5 mx-auto">
            <div className="mb-6 lg:mb-0 lg:mr-4 w-4/5 md:w-3/5 lg:w-1/3">
              <Input placeHolder="Tên của bạn" onInputChange={onNameChange} />
            </div>
            <div className="mb-6 lg:mb-0 lg:mr-4 w-4/5 md:w-3/5 lg:w-1/3">
              <Input
                placeHolder="Email của bạn"
                onInputChange={onEmailChange}
              />
            </div>
            <div
              onClick={onSubmit}
              className="flex items-center py-3 justify-center bg-green-5 rounded-xs w-48 text-white font-semibold"
            >
              Xác nhận
            </div>
          </div>
          <div className="flex justify-center">
            <RadioButton onCheck={onAgreeTerm}>
              Tôi đã đọc và đồng ý với các điều khoản và điều kiện
            </RadioButton>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ContactPage;
