import Link from "next/link";
import s from "./menu.module.css";
import cn from "classnames";
import { useRef, useEffect } from "react";
import useHover from "../../utils/hooks/useHover";
import { useDispatch, useSelector } from "react-redux";
import { hoverNav } from "../../store/actions/ui-action";
import isEqual from "lodash.isequal";
import { useRouter } from "next/dist/client/router";

const NavItem = ({ level, link, name }) => {
  const router = useRouter();
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const dispatch = useDispatch();
  const uiState = useSelector((state) => state.uiReducers);

  useEffect(() => {
    if (isHover) {
      dispatch(hoverNav(level));
    }
  }, [isHover]);

  return (
    <div
      ref={hoverRef}
      className={cn(
        "p-4 text-white text-xs",
        s.item,
        uiState.navHovered &&
          (uiState.navHovered === level ||
            isEqual(level, uiState.navHovered.slice(0, -1)) ||
            isEqual(level, uiState.navHovered.slice(0, -2)))
          ? "bg-yellow"
          : "",
        {
          [s.active]: router.pathname === link && level.length < 2,
        }
      )}
    >
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </div>
  );
};

export default NavItem;
