import Image from "next/image";
import Link from "next/link";
import Container from "../layout/container";
import Mail from "../icons/mail";

const Footer = () => {
  const onEmailChange = () => {};

  return (
    <footer className="w-full border-t border-solid border-grey pt-16">
      <Container cl="relative flex flex-col text-black-8 text-xs">
        <div className="absolute w-60 bottom-0 left-0 z-negative">
          <Image
            src="/assets/images/common/logo-lite.png"
            width={259}
            height={378}
            layout="responsive"
          />
        </div>
        <div>
          <div className="flex flex-col lg:flex-row mb-16">
            <div className="lg:w-4/12">
              <div className="w-32 md:w-48">
                <Image
                  src="/assets/images/common/logo.png"
                  width={370}
                  height={70}
                  layout="responsive"
                  alt="BMI Polymer Logo"
                />
              </div>
            </div>
            <div className="flex lg:w-4/12">
              <div className="flex w-full">
                <div className="flex flex-col w-1/2">
                  <h6 className="font-semibold mb-8">Site map</h6>
                  <nav className="flex flex-col">
                    <Link href="/">
                      <a className="opacity-70 mb-2 cursor-pointer">
                        Trang chủ
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="opacity-70 mb-2 cursor-pointer">
                        Abouts BMI
                      </a>
                    </Link>
                    <Link href="products">
                      <a className="opacity-70 mb-2 cursor-pointer">Sản phẩm</a>
                    </Link>
                    <Link href="news">
                      <a className="opacity-70 mb-2 cursor-pointer">Tin tức</a>
                    </Link>
                    <Link href="/contact">
                      <a className="opacity-70 mb-2 cursor-pointer">Liên hệ</a>
                    </Link>
                    <Link href="support">
                      <a className="opacity-70 mb-2 cursor-pointer">Hỗ trợ</a>
                    </Link>
                  </nav>
                </div>
                <div className="flex flex-col">
                  <h6 className="font-semibold mb-8">Socials</h6>
                  <a
                    className="opacity-70 mb-2 cursor-pointer"
                    href="https://facebook.com"
                  >
                    Facebook
                  </a>
                  <a
                    className="opacity-70 mb-2 cursor-pointer"
                    href="https://linkedin.com"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-4/12">
              <div className="mb-8">
                <h6 className="font-semibold mb-8">Head Office</h6>
                <p className="opacity-70">
                  Lot CN07, Phuc Son Industrial Zone, Ninh Phuc Ward, Ninh Binh
                  City, Ninh Binh Province, Viet Nam
                </p>
              </div>
              <div>
                <h6 className="font-semibold mb-8">News letter</h6>
                <div className="flex justify-between w-full lg:w-4/5 py-2 border-b border-solid">
                  <input
                    className="focus:outline-none"
                    placeholder="Enter your email address"
                    onChange={onEmailChange}
                  />
                  <span className="cursor-pointer">
                    <Mail width="20px" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  mb-16">
            <p className="lg:w-4/12">
              <span className="font-semibold">Email: </span>
              <span>info@bmipolymer.com.vn</span>
            </p>
            <p className="lg:w-4/12">
              <span className="font-semibold">Tel: </span>
              <span>+84 229.3593.555</span>
            </p>
            <p className="lg:w-4/12">
              <span className="font-semibold">Hotline: </span>
              <span>+84.984.097.525</span>
            </p>
          </div>
        </div>
      </Container>
      <p className="py-2 md:py-4 text-center w-full bg-green-9 text-white text-xs font-normal">
        © 2021 BMI JSC All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
