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
      desc="Đang cập nhật ..."
      products={allProducts}
      titleProduct={title}
      descProduct={[
        `Nhựa Compound/ Hợp chất nhựa là sự kết hợp phương pháp tốt nhất để thay đổi đặc tính của nhựa nhiệt dẻo được thiết kế ban đầu. Sản phẩm hợp chất cuối cùng là sự pha trộn của nhựa và phụ gia với các tính năng vật lý mới đáp ứng theo kỳ vọng của thành phẩm cuối cùng khi đưa vào sử dụng. 
      Nhựa Compound/ Hợp chất nhựa đặc biệt là sự kết hợp đặc biệt một cách sáng tạo để làm cho sản phẩm của bạn mạnh mẽ hơn và linh hoạt hơn với nhiều các yếu tố ở mức cao và đặc thù. Thậm chí có thể tạo ra các sản phẩm phát sáng trong bóng tối. 
      
      Như vậy, nhựa Compound/ Hợp chất nhựa bao gồm việc chuẩn bị các công thức nhựa bằng cách trộn  các polyme và phụ gia ở trạng thái nóng chảy để đạt được các đặc tính mong muốn. Các hỗn hợp này được định lượng tự động với các điểm đặt cố định thường thông qua khay nạp / phễu. Nhựa compound chủ yếu là sự pha trộn của các chất đồng trùng hợp như ABS, PA, PBT, PC, PP, SAN, SMA,…v.v. với các chất phụ gia như chất chống oxy hóa, chất ổn định tia cực tím và các chất gia tăng giá trị khác…..và đôi khi một thành phần tăng cường được thêm vào như sợi thủy tinh hay một thành phần khác theo yêu cầu tăng cường hiệu suất cơ tính cho nhựa gốc.
      Nhựa compound có các tiêu chí quan trọng khác nhau để đạt được sự pha trộn đồng nhất của các nguyên liệu thô khác nhau. Sự trộn phân tán và phân tán cũng như nhiệt là những yếu tố quan trọng.
      Nhựa compound thường được thực hiện bằng cách ép đùn. Phễu nạp phần đầu của vít sẽ vận chuyển dần nhựa về phía khuôn. Bản thân trục vít được giới hạn trong một thùng có các khu vực khác nhau có thể được làm nóng tùy theo đặc tính của nhựa.
      Máy trộn đồng trộn và vít đôi (đồng bộ và bộ đếm quay) cũng như máy trộn bên trong là những bộ trộn được sử dụng phổ biến nhất trong ngành công nghiệp nhựa.
      Chất đùn, trông giống như những sợi nhựa dài, sau đó được làm mát trong nồi cách thủy hoặc bằng cách phun khi băng tải chuyển nó đến máy tạo hạt. Máy tạo hạt sẽ phá vỡ các sợi thành các kích thước viên mong muốn.
      
      Nhựa Compound/ Hợp chất nhựa là sự kết hợp phương pháp tốt nhất để thay đổi đặc tính của nhựa nhiệt dẻo được thiết kế ban đầu. Sản phẩm hợp chất cuối cùng là sự pha trộn của nhựa và phụ gia với các tính năng vật lý mới đáp ứng theo kỳ vọng của thành phẩm cuối cùng khi đưa vào sử dụng. 
      Nhựa Compound/ Hợp chất nhựa đặc biệt là sự kết hợp đặc biệt một cách sáng tạo để làm cho sản phẩm của bạn mạnh mẽ hơn và linh hoạt hơn với nhiều các yếu tố ở mức cao và đặc thù. Thậm chí có thể tạo ra các sản phẩm phát sáng trong bóng tối. 

      Như vậy, nhựa Compound/ Hợp chất nhựa bao gồm việc chuẩn bị các công thức nhựa bằng cách trộn  các polyme và phụ gia ở trạng thái nóng chảy để đạt được các đặc tính mong muốn. Các hỗn hợp này được định lượng tự động với các điểm đặt cố định thường thông qua khay nạp / phễu. Nhựa compound chủ yếu là sự pha trộn của các chất đồng trùng hợp như ABS, PA, PBT, PC, PP, SAN, SMA,…v.v. với các chất phụ gia như chất chống oxy hóa, chất ổn định tia cực tím và các chất gia tăng giá trị khác…..và đôi khi một thành phần tăng cường được thêm vào như sợi thủy tinh hay một thành phần khác theo yêu cầu tăng cường hiệu suất cơ tính cho nhựa gốc.
      Nhựa compound có các tiêu chí quan trọng khác nhau để đạt được sự pha trộn đồng nhất của các nguyên liệu thô khác nhau. Sự trộn phân tán và phân tán cũng như nhiệt là những yếu tố quan trọng.
      Nhựa compound thường được thực hiện bằng cách ép đùn. Phễu nạp phần đầu của vít sẽ vận chuyển dần nhựa về phía khuôn. Bản thân trục vít được giới hạn trong một thùng có các khu vực khác nhau có thể được làm nóng tùy theo đặc tính của nhựa.
      Máy trộn đồng trộn và vít đôi (đồng bộ và bộ đếm quay) cũng như máy trộn bên trong là những bộ trộn được sử dụng phổ biến nhất trong ngành công nghiệp nhựa.
      Chất đùn, trông giống như những sợi nhựa dài, sau đó được làm mát trong nồi cách thủy hoặc bằng cách phun khi băng tải chuyển nó đến máy tạo hạt. Máy tạo hạt sẽ phá vỡ các sợi thành các kích thước viên mong muốn.`,
      ]}
    />
  );
};

export default ProductsPage;
