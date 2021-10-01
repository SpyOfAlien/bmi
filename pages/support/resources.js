import Page from "../../components/layout/page";
// import { Document, Page, setOptions } from "react-pdf/build/entry";
import { promises as fs } from "fs";
import path from "path";
import CommingSoon from "../../components/comming-soon/comming-soon";
import Container from "../../components/layout/container";

export async function getStaticProps() {
  const pdfDirectory = path.join(process.cwd(), "public/pdf");
  const filenames = await fs.readdir(pdfDirectory);

  return { props: { filenames, dir: pdfDirectory } };
}

const ResourcesPage = ({ filenames, dir }) => {
  const downloadFile = (file) => {
    window.open(`/pdf/${file}`);
  };

  return (
    <Page>
      <Container>
        <div className="my-32">
          <h3 className="text-h3 font-semibold mb-12 text-center">
            Tài liệu về BMI
          </h3>
          <div>
            {filenames.map((file, idx) => (
              <div
                className="flex justify-between mb-6 bg-white shadow hover:shadow-md rounded-xs py-6 px-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 50 + 300}
              >
                <div>{file}</div>
                <div
                  onClick={(event) => downloadFile(file)}
                  className="cursor-pointer border border-solid px-2 py-1"
                >
                  Xem tài liệu
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
