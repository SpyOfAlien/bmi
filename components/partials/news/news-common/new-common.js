import Page from "../../../../components/layout/page";
import SideBar from "../../../sidebar/sidebar";
import CommingSoon from "../../../comming-soon/comming-soon";
import Hero from "../../../ui/hero/hero";
import { useSelector } from "react-redux";
import newsSidebars from "../../../../utils/data/sidebar/news";
import Image from "next/image";
import Container from "../../../layout/container";

const NewsCommon = ({ title, desc }) => {
  const uiState = useSelector((state) => state.uiReducers);

  return (
    // <Page>
    //   <div className="relative">
    //     <div>
    //       <Hero
    //         img="/assets/images/hero/about/about-bmi.png"
    //         title={title}
    //         desc={desc}
    //       />
    //     </div>
    //     <div className="absolute bottom-0 left-0 right-0 z-negative">
    //       <div className="w-full ">
    //         <Image
    //           src="/assets/images/common/dot-bg.png"
    //           width={1920}
    //           height={512}
    //           layout="responsive"
    //         />
    //       </div>
    //     </div>
    //     <Container>
    //       <div className="flex py-12">
    //         <div className="w-full md:w-4/12">
    //           <SideBar sidebars={newsSidebars} />
    //         </div>
    //         <div className="w-full md:w-8/12 z-10 bg-white md:ml-4 p-4 rounded-xs shadow-sidebarContent">
    //           <CommingSoon />
    //         </div>
    //       </div>
    //     </Container>
    //   </div>
    // </Page>
    <div>BMI Polymer</div>
  );
};

export default NewsCommon;
