import Image from "next/image";
import Button from "../ui/button/button";
import { useRouter } from "next/dist/client/router";

const CommingSoon = () => {
  const router = useRouter();

  return (
    <div className="relative w-full">
      <div className="w-full h-screen">
        <Image src="/assets/images/common/menu-bg.png" layout="fill" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h3 className="text-white text-h3 text-center font-bold mb-4">
          Đang cập nhật!
        </h3>

        <Button
          onClickBtn={() => router.push("/")}
          cl="border-white text-white"
        >
          Trở về trang chủ
        </Button>
      </div>
    </div>
  );
};

export default CommingSoon;
