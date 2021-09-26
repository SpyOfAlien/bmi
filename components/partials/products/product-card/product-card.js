import Link from "next/link";
import Image from "next/image";
import Right from "../../../icons/right";
import cn from "classnames";

const ProductCard = ({ slug, img, name, summary, cl = "" }) => {
  return (
    <div className={cn("relative", cl)}>
      <Link href={`/products/${slug}`}>
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
            <div className="h-3/5 w-full flex">
              <div className="w-10/12 bg-white bg-opacity-70 p-2">
                <h6 className="text-h6 mb-4">{name}</h6>
                <p className="text-xs">{summary}</p>
              </div>
              <div className="w-2/12 flex items-end">
                <span className="w-full bg-yellow p-2">
                  <Right width="28px" height="28px" />
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
