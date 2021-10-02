import Image from "next/image";
import YouTube from "react-youtube";
import Right from "../../../icons/right";
import cn from "classnames";
import Link from "next/link";

const Products = ({ products, title, desc, url, productBox = [] }) => {
  const opts = {
    height: "180",
    width: "260",
    playerVars: {
      autoplay: 0,
    },
  };

  console.log("mmm", productBox.length);

  return (
    <div>
      <div className="mb-16">
        <h4 className="text-h4 font-semibold mb-8">{title}</h4>
        <div className="flex mb-8">
          <div className="mr-4">
            <YouTube videoId={url} opts={opts} />
          </div>
          <p>{desc}</p>
        </div>
      </div>

      {productBox.length > 0 && (
        <div className="mb-16 flex flex-wrap">
          {productBox.map((item, idx) => (
            <div
              key={idx}
              className="w-1/2 md:w3/5 lg:w-4/5 xl:w-18% shadow-md mb-2 mr-2 p-2"
            >
              <div className="w-full mb-2">
                <Image
                  src={item.imgUrl}
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>

              <h6 className="text-center font-semibold">{item.name}</h6>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row md:justify-between mb-8 py-4 px-8 lg:px-12 rounded-xs shadow-sidebarContent bg-white">
        <p>
          Hiện thị tất cả{" "}
          <span className="font-semibold">{products.length}</span> sản phẩm
        </p>

        <p>Loc san pham</p>
      </div>

      {products.length ? (
        <div className="flex flex-wrap justify-between">
          {products.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "relative w-full md:w-48% cursor-pointer shadow-sidebarContent mb-4",
                idx % 2 === 0 && "mr-2"
              )}
            >
              <Link href={`/products/${item.slug}`}>
                <a>
                  <div className="w-full">
                    <Image
                      src="/assets/images/products/green.png"
                      width={730}
                      height={487}
                      layout="responsive"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-end z-10">
                    <div className="h-1/2 w-full flex">
                      <div className="10/12 bg-white bg-opacity-70 p-2">
                        <h6 className="text-h6 font-semibold mb-4">
                          {item.name}
                        </h6>
                        <p>{item.summary}</p>
                      </div>
                      <div className="2/12 flex items-end">
                        <span className="w-full bg-yellow p-2">
                          <Right width="28px" height="28px" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>Chưa có sảm phẩm nào thuộc dòng nay</div>
      )}
    </div>
  );
};

export default Products;
