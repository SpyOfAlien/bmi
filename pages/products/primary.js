import ProductCommon from "../../components/partials/products/products-common/products-common";
import { getProductsByType } from "../../graphql/product";

export async function getStaticProps({ preview = false }) {
  const allProducts = (await getProductsByType(preview, "primary")) ?? [];
  return {
    props: { allProducts },
  };
}

const ProductsPage = ({ allProducts }) => {
  const title = "Nhựa nguyên sinh";
  const desc =
    "Sản phẩm hạt nhựa compound nổi bật với nhiều ứng dụng công nghệ - công nghiệp khác nhau của BMI mang đến những tính ưu điểm vượt trội ngay từ thời điểm ban đầu cho sản phẩm của các khách hàng. Bên cạnh đó, BMI cũng cung cấp các dòng nhựa nguyên sinh từ các nhà sản xuất lớn trên thế giới theo nhu cầu của Quý khách hàng.";

  return (
    <ProductCommon
      title={["Sản phẩm ", <span className="text-yellow">BMI</span>]}
      desc="Đang cập nhật ..."
      products={allProducts}
      titleProduct={title}
      descProduct={desc}
    />
  );
};

export default ProductsPage;
