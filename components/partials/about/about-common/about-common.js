import Page from "../../../../components/layout/page";
import SideBar from "../../../sidebar/sidebar";
import CommingSoon from "../../../comming-soon/comming-soon";
import Hero from "../../../ui/hero/hero";
import { useSelector } from "react-redux";
import aboutSidebars from "../../../../utils/data/sidebar/about";
import isEqual from "lodash.isequal";
import AboutBmi from "../about-bmi/about-bmi";
import Container from "../../../layout/container";
import Image from "next/image";
import AboutHistory from "../about-history/about-history";
import AboutVision from "../about-vision/about-vision";
import AboutPartner from "../about-partner/about-partner";
import AboutFinance from "../about-finance";
import AboutResource from "../about-resource";
import AboutInfrastructure from "../about-infrastructure";
import AboutMember from "../about-member";

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
          <div className="flex flex-col md:flex-row py-12">
            <div className="w-full md:w-4/12">
              <SideBar sidebars={aboutSidebars} />
            </div>
            <div className="w-full md:w-8/12 z-10 bg-white md:ml-4 p-4 rounded-xs shadow-sidebarContent">
              {isEqual(uiState.sidebarControler.level, [0]) && <AboutBmi />}
              {isEqual(uiState.sidebarControler.level, [1]) && <AboutHistory />}
              {isEqual(uiState.sidebarControler.level, [2]) && <AboutVision />}
              {isEqual(uiState.sidebarControler.level, [3]) && <AboutMember />}
              {isEqual(uiState.sidebarControler.level, [4]) && <CommingSoon />}
              {isEqual(uiState.sidebarControler.level, [4, 0]) && (
                <AboutInfrastructure />
              )}
              {isEqual(uiState.sidebarControler.level, [4, 1]) && (
                <AboutFinance />
              )}
              {isEqual(uiState.sidebarControler.level, [4, 2]) && (
                <AboutResource />
              )}
              {isEqual(uiState.sidebarControler.level, [4, 3]) && (
                <AboutPartner />
              )}
            </div>
          </div>
        </Container>
      </div>
    </Page>
  );
};

export default AboutCommon;
