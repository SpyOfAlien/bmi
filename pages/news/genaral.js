import NewsCommon from "../../components/partials/news/news-common/new-common";

const GenaralNewsPage = () => {
  return (
    <NewsCommon
      title={["Tin tức ", <span className="text-yellow">BMI</span>]}
      desc="Đang cập nhật ..."
    />
  );
};

export default GenaralNewsPage;
