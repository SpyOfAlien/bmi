import ProductCommon from "../../components/partials/products/products-common/products-common";
import { getProductsByType } from "../../graphql/product";

export async function getStaticProps({ preview = false }) {
  const allProducts = (await getProductsByType(preview, "compound")) ?? [];

  return {
    props: { allProducts },
  };
}

const ProductsPage = ({ allProducts }) => {
  const title = "Nhựa kỹ thuật compound";
  const desc =
    "Sản phẩm hạt nhựa compound nổi bật với nhiều ứng dụng công nghệ - công nghiệp khác nhau của BMI mang đến những tính ưu điểm vượt trội ngay từ thời điểm ban đầu cho sản phẩm của các khách hàng. Bên cạnh đó, BMI cũng cung cấp các dòng nhựa nguyên sinh từ các nhà sản xuất lớn trên thế giới theo nhu cầu của Quý khách hàng.";

  return (
    <ProductCommon
      title={["Sản phẩm ", <span className="text-yellow">BMI</span>]}
      desc="Description of title with 3 row:  consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad"
      products={allProducts}
      titleProduct={title}
      descProduct={desc}
    />
  );
};

export default ProductsPage;
