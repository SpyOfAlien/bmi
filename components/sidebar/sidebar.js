import SidebarItem from "./sidebar-item";
import useWindowSize from "../../utils/hooks/useWindowSize";

const SideBar = ({ sidebars = [] }) => {
  const { w, h } = useWindowSize();

  return (
    <div className="flex flex-col">
      {sidebars.map((item, idx) => (
        <ul key={item.name}>
          <SidebarItem sidebar={item} key={idx} />
          {item.childrens && w >= 768 && <SideBar sidebars={item.childrens} />}
        </ul>
      ))}
    </div>
  );
};

export default SideBar;
