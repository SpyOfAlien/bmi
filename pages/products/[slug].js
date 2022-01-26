import Page from "../../components/layout/page";
import Image from "next/image";
import { getAllProductSlug, getProductAndRelated } from "../../graphql/product";
import Container from "../../components/layout/container";
import ProductCard from "../../components/partials/products/product-card/product-card";
import getRichTextRenderOptions from "../../components/rich-text/helper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps({ params, preview = false }) {
  const data = await getProductAndRelated(params.slug, preview);

  return {
    props: {
      preview,
      product: data?.product ?? null,
      relatedProduct: data?.relatedProduct ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allProducts = await getAllProductSlug();
  return {
    paths: allProducts?.map(({ slug }) => `/products/${slug}`) ?? [],
    fallback: true,
  };
}

const ProductDetailPage = ({ product, relatedProduct }) => {
  console.log("product", product);
  console.log("relatedProduct", relatedProduct);

  return (
    <Page>
      <section className="relative">
        <div className="absolute w-full h-full inset-0 z-10 opacity-60 bg-green-9"></div>
        <div className="w-full">
          <Image
            src={product.thumbnail.url}
            width={product.thumbnail.width}
            height={product.thumbnail.height}
            layout="responsive"
          />
        </div>
      </section>

      <section className="relative bottom-24 z-10">
        <Container>
          <div className="bg-white shadow-sidebarContent py-4 px-2 md:px-8 flex flex-col md:flex-row">
            <div className="w-full md:w-3/5 mb-8 md:mb-0">
              <h5 className="text-h5 text-green-5 font-semibold mb-4">
                {product.name}
              </h5>
              <p className="pr-6 ">{product.overview}</p>
            </div>
            <div className="w-full md:w-2/5">
              <div className="w-full mb-4">
                <Image
                  src={product.thumbnail.url}
                  width={product.thumbnail.width}
                  height={product.thumbnail.height}
                  layout="responsive"
                />
              </div>
              {/* <button className="bg-green-5 text-white px-4 py-2 w-full">
                Liên hệ tư vấn
              </button> */}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bottom-20 z-10">
        <Container>
          <div className="bg-white shadow-sidebarContent py-4 px-2 md:px-8">
            <div className="flex flex-wrap mb-12">
              {product.boxCollection &&
                product.boxCollection.items.length > 0 &&
                product.boxCollection.items.map((item, idx) => (
                  <div key={idx} className="w-32% mr-2">
                    <Image
                      src={item.url}
                      width={item.width}
                      height={item.height}
                      layout="responsive"
                    />
                  </div>
                ))}
            </div>
            <div className="flex">
              {documentToReactComponents(
                product.desc.json,
                getRichTextRenderOptions(product?.links, {})
              )}
            </div>
          </div>
        </Container>
      </section>

      {relatedProduct.length && (
        <section className="mb-24">
          <Container>
            <h5 className="text-h5 font-semibold text-center mb-12">
              Các sản phẩm tương tự
            </h5>

            <div className="flex flex-wrap lg:flex-nowrap">
              {relatedProduct.map((item, idx) => (
                <ProductCard
                  cl="w-full md:w-48% lg:w-1/3 md:mr-2 mb-4 lg:mb-0"
                  key={idx}
                  slug={item.slug}
                  name={item.name}
                  summary={item.summary}
                  img={item.thumbnail.url}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </Page>
  );
};

export default ProductDetailPage;
