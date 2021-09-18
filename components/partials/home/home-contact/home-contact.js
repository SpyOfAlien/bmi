import Image from "next/image";
import useWindowSize from "../../../../utils/hooks/useWindowSize";
import { useRouter } from "next/dist/client/router";

const HomeContact = () => {
  const { w, h } = useWindowSize();
  const router = useRouter();

  const onClickContact = () => {
    router.push("/contact");
  };

  return (
    <div className="relative">
      <div className="w-full">
        <Image
          src="/assets/images/common/contact-bg.png"
          width={w > 1024 ? 1920 : w > 700 ? 1000 : 500}
          height={354}
          layout="responsive"
        />
      </div>

      <div className="absolute bottom-0 left-8 md:left-12 lg:left-24 ">
        <div className="w-60">
          <Image
            src="/assets/images/common/contact-poly.png"
            width={285}
            height={219}
            layout="responsive"
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="400"
        className="absolute inset-0 w-full flex flex-col justify-center"
      >
        <h5 className="text-center text-white text-h6 lg:text-h5 w-full lg:w-3/5 mx-auto mb-4 px-4 lg:px-0">
          “Chúng tôi luôn sẵn sàng với mọi thử thách. Hãy cho tôi biết điều điều
          bạn cần được cung cấp”
        </h5>
        <p className="text-center text-white mb-8">
          <span className="mr-4">Rachel Azark</span>
          <span>CEO</span>
        </p>

        <div className="flex justify-center">
          <button
            className="px-6 py-3 w-44 text-green-5 bg-white rounded-xs cursor-pointer"
            onClick={onClickContact}
          >
            Liên hệ
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
