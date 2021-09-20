import NavItem from "./nav-item";
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { useEffect } from "react";
import useWindowSize from "../../utils/hooks/useWindowSize";

const NavList = ({ navs }) => {
  const uiState = useSelector((state) => state.uiReducers);
  const { w, h } = useWindowSize();

  return (
    <div>
      {navs.map((nav, idx) => (
        <div className="relative w-60">
          <NavItem
            key={idx}
            level={nav.level}
            name={nav.name}
            link={nav.link}
            page={nav.page}
          />
          <div className="absolute left-full top-0">
            {w >= 768 &&
              uiState.navHovered &&
              (isEqual(uiState.navHovered, nav.level) ||
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
