import Container from "../../../layout/container";
import Button from "../../../ui/button/button";
import Image from "next/image";
import cn from "classnames";
import useWindowSize from "../../../../utils/hooks/useWindowSize";
import { useRouter } from "next/dist/client/router";

const HomeHistory = () => {
  const { w, h } = useWindowSize();
  const router = useRouter();

  const accomplishments = [
    { number: "16+", desc: "Wrting 2 rows with your Goal description " },
    { number: "20+", desc: "Wrting 2 rows with your Goal description " },
    { number: "24+", desc: "Wrting 2 rows with your Goal description " },
    { number: "50+", desc: "Wrting 2 rows with your Goal description " },
  ];

  return (
    <Container>
      <div className="flex flex-col lg:flex-row mb-16">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          className="w-full lg:w-1/2 pr-4 flex flex-col justify-center"
        >
          <h6 className="uppercase font-normal mb-2">Về chúng tôi</h6>
          <div className="mb-6">
            <h3 className="text-h3 font-semibold tracking-wide mb-4">
              Hành trình lịch sử
            </h3>
            <p>
              Description of title with 3 row: consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad
            </p>
          </div>

          <Button cl="w-44" onClickBtn={() => router.push("/about/history")}>
            Xem thêm
          </Button>
        </div>
        <div className="w-full lg:w-1/2 py-8 lg:p-8">
          <Image
            src="/assets/images/common/history.png"
            width={589}
            height={509}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap">
        {accomplishments.map((item, idx) => (
          <div
            data-aos="fade-up"
            data-aos-delay={idx * 100 + 300}
            data-aos-duration="500"
            key={idx}
            className={cn(
              "border-b-4 border-solid border-green-6 w-1/2 lg:w-1/4 pt-4 px-4 md:px-6 w-48 h-48 shadow-lg hover:shadow-2xl cursor-pointer",
              idx !== 3 && w > 768 && "mr-4",
              idx !== 3 && w > 1024 && "mr-8",
              (idx === 0 || idx === 2) && w <= 768 && "mr-2",
              (idx === 0 || idx === 1) && w <= 768 && "mb-4"
            )}
            style={{ width: w > 768 ? "25%" : "calc(50% - 5px)" }}
          >
            <h1 className="text-yellow text-h3 font-semibold mb-8">
              {item.number}
            </h1>
            <p className="opacity-70">{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeHistory;
