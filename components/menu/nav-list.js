import NavItem from "./nav-item";
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { useEffect } from "react";

const NavList = ({ navs }) => {
  const uiState = useSelector((state) => state.uiReducers);

  return (
    <div className="w-60 z-10">
      {navs.map((nav, idx) => (
        <div className="relative bg-green-9 opacity-60">
          <NavItem
            key={idx}
            level={nav.level}
            name={nav.name}
            link={nav.link}
          />
          <div className="absolute left-full top-0">
            {uiState.navHovered &&
              (uiState.navHovered === nav.level ||
                isEqual(nav.level, uiState.navHovered.slice(0, -1)) ||
                isEqual(nav.level, uiState.navHovered.slice(0, -2))) &&
              nav.childrens && <NavList navs={nav.childrens} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavList;
