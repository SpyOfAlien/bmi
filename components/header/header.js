import Hamburger from "../ui/hamburgur/hamburger";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between px-4 h-16 sticky top-0 bg-white"
      style={{
        zIndex: 99999,
        filter: "drop-shadow(0px 4px 20px rgba(1, 21, 52, 0.08))",
      }}
    >
      <div className="w-32 md:w-48">
        <Image
          src="/assets/images/common/logo.png"
          width={370}
          height={70}
          layout="responsive"
          alt="BMI Polymer Logo"
        />
      </div>
      <div className="w-1/2 flex justify-end">
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
