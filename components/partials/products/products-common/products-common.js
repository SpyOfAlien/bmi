import Page from "../../../layout/page";
import SideBar from "../../../sidebar/sidebar";
import CommingSoon from "../../../comming-soon/comming-soon";
import Hero from "../../../ui/hero/hero";
import { useSelector } from "react-redux";
import productsSidebars from "../../../../utils/data/sidebar/products";
import Container from "../../../layout/container";
import Image from "next/image";
import Products from "../products/products";

const ProductCommon = ({
  title,
  desc,
  products,
  titleProduct,
  descProduct,
}) => {
  const uiState = useSelector((state) => state.uiReducers);

  return (
    <Page>
      <div className="relative">
        <div>
          <Hero
            img="/assets/images/hero/products/product-hero.png"
            title={title}
            desc={desc}
          />
        </div>

        <Container cl="relative">
          <div className="flex py-12">
            <div className="w-full md:w-3/12">
              <SideBar sidebars={productsSidebars} />
            </div>
            <div className="w-full md:w-9/12 z-10 ml-4 p-4">
              <Products
                products={products}
                title={titleProduct}
                desc={descProduct}
                url="2g811Eo7K8U"
              />
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 z-negative">
            <div className="w-full ">
              <Image
                src="/assets/images/common/dot-bg.png"
                width={1920}
                height={512}
                layout="responsive"
              />
            </div>
          </div>
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
        </Container>
      </div>
    </Page>
  );
};

export default ProductCommon;
