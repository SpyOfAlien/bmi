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
    //
    <div>BMI Polymer</div>
  );
};

export default ProductDetailPage;
