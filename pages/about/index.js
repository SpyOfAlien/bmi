import AboutCommon from "../../components/partials/about/about-common/about-common";

const AboutPage = () => {
  return (
    <AboutCommon
      title={["About ", <span className="text-yellow">BMI</span>]}
      desc="Đang cập nhật ..."
    />
  );
};
export default AboutPage;
