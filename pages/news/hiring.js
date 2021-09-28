import NewsCommon from "../../components/partials/news/news-common/new-common";

const HiringNewsPage = () => {
  return (
    <NewsCommon
      title={["Tin tức ", <span className="text-yellow">BMI</span>]}
      desc="Description of title with 3 row:  consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad"
    />
  );
};

export default HiringNewsPage;
