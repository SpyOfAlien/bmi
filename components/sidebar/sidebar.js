import SidebarItem from "./sidebar-item";

const SideBar = ({ sidebars = [] }) => {
  return (
    <div className="flex flex-col">
      {sidebars.map((item, idx) => (
        <ul key={item.name}>
          <SidebarItem sidebar={item} key={idx} />
          {item.childrens && <SideBar sidebars={item.childrens} />}
        </ul>
      ))}
    </div>
  );
};

export default SideBar;
