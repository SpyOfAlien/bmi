import Header from "../header/header";
import Footer from "../footer/footer";

const Page = ({ children }) => {
  return (
    <div className="op-relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Page;
