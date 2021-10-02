import Page from "../../components/layout/page";
// import { Document, Page, setOptions } from "react-pdf/build/entry";
import { promises as fs } from "fs";
import path from "path";
import CommingSoon from "../../components/comming-soon/comming-soon";
import Container from "../../components/layout/container";

export async function getStaticProps() {
  const pdfProfileDirectory = path.join(process.cwd(), "public/pdf/profiles");
  const profilesFilenames = await fs.readdir(pdfProfileDirectory);

  const pdfProductsDirectory = path.join(process.cwd(), "public/pdf/products");
  const productsFilenames = await fs.readdir(pdfProductsDirectory);

  return {
    props: {
      profiles: profilesFilenames,
      products: productsFilenames,
      dir: pdfProductsDirectory,
    },
  };
}

const ResourcesPage = ({ profiles, products, dir }) => {
  const downloadFile = (file, type) => {
    if (type === "profile") {
      window.open(`/pdf/profiles/${file}`);
    } else {
      window.open(`/pdf/products/${file}`);
    }
  };

  return (
    <Page>
      <Container>
        <div className="my-32">
          <h3 className="text-h3 font-semibold mb-12 text-center">
            BMI Profiles
          </h3>
          <div>
            {profiles.map((file, idx) => (
              <div
                className="flex justify-between mb-6 bg-white shadow hover:shadow-md rounded-xs py-6 px-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50 + 300}
              >
                <div>{file}</div>
                <div
                  onClick={(event) => downloadFile(file, "profile")}
                  className="cursor-pointer border border-solid px-2 py-1"
                >
                  Xem tài liệu
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-32">
          <h3 className="text-h3 font-semibold mb-12 text-center">
            Sản phẩm BMI
          </h3>
          <div className="flex flex-wrap">
            {products.map((file, idx) => (
              <div
                className="flex flex-col mr-4 mb-2 w-48% md:w-1/3 xl:w-18% justify-between mb-6 bg-white shadow hover:shadow-md rounded-xs py-6 px-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50 + 300}
              >
                <div className="mb-4 text-center font-semibold">{file}</div>
                <div
                  onClick={(event) => downloadFile(file, "products")}
                  className="text-center w-4/5 mx-auto cursor-pointer border border-solid px-2 py-1"
                >
                  Xem chi tiết
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default ResourcesPage;
