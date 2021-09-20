import Page from "../../../../components/layout/page";
import SideBar from "../../../sidebar/sidebar";
import CommingSoon from "../../../comming-soon/comming-soon";
import Hero from "../../../ui/hero/hero";
import { useSelector } from "react-redux";
import sidebars from "../../../../utils/data/sidebar/about";
import isEqual from "lodash.isequal";
import AboutBmi from "../about-bmi/about-bmi";
import Container from "../../../layout/container";
import Image from "next/image";

const AboutCommon = ({ title, desc }) => {
  const uiState = useSelector((state) => state.uiReducers);

  return (
    <Page>
      <div className="relative">
        <div>
          <Hero
            img="/assets/images/hero/about/about-bmi.png"
            title={title}
            desc={desc}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-negative">
          <div className="w-full ">
            <Image
              src="/assets/images/common/dot-bg.png"
              width={1920}
              height={512}
              layout="responsive"
            />
          </div>
        </div>
        <Container>
          <div className="flex py-12">
            <div className="w-full md:w-4/12">
              <SideBar sidebars={sidebars} />
            </div>
            <div className="w-full md:w-8/12 z-10 bg-white ml-4 p-4 rounded-xs shadow-sidebarContent">
              {isEqual(uiState.sidebarControler.level, [0]) && <AboutBmi />}
              {isEqual(uiState.sidebarControler.level, [1]) && <CommingSoon />}
              {isEqual(uiState.sidebarControler.level, [2]) && <CommingSoon />}
              {isEqual(uiState.sidebarControler.level, [3]) && <CommingSoon />}
              {isEqual(uiState.sidebarControler.level, [4]) && <CommingSoon />}
            </div>
          </div>
        </Container>
      </div>
    </Page>
  );
};

export default AboutCommon;
