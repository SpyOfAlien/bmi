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

  const productBox = [
    { name: "ABS1", imgUrl: "/assets/images/products/ABS1.png" },
    { name: "ABS2", imgUrl: "/assets/images/products/ABS2.png" },
    { name: "HDPE", imgUrl: "/assets/images/products/HDPE.png" },
    { name: "HIPS 476L", imgUrl: "/assets/images/products/HIPS476L.png" },
    { name: "HIPS 850", imgUrl: "/assets/images/products/HIPS850.png" },
    { name: "HIPS 8250", imgUrl: "/assets/images/products/HIPS8250.png" },
    { name: "PP1", imgUrl: "/assets/images/products/PP1.png" },
    { name: "PP2", imgUrl: "/assets/images/products/PP2.png" },
    { name: "PP3", imgUrl: "/assets/images/products/PP3.png" },
    { name: "PP4", imgUrl: "/assets/images/products/PP4.png" },
    { name: "PP5", imgUrl: "/assets/images/products/PP5.png" },
    { name: "PP6", imgUrl: "/assets/images/products/PP6.png" },
    { name: "PP7", imgUrl: "/assets/images/products/PP7.png" },
    { name: "PP8", imgUrl: "/assets/images/products/PP8.png" },
  ];

  return (
    <ProductCommon
      title={["Sản phẩm ", <span className="text-yellow">BMI</span>]}
      desc="Đang cập nhật ..."
      products={allProducts}
      titleProduct={title}
      descProduct={desc}
      productBox={productBox}
    />
  );
};

export default ProductsPage;
