import cn from "classnames";
import s from "./side-bar.module.css";
import { useSelector, useDispatch } from "react-redux";
import isEqual from "lodash.isequal";
import { useEffect } from "react";
import { updateSidebarController } from "../../store/actions/ui-action";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const SidebarItem = ({ sidebar }) => {
  const uiState = useSelector((state) => state.uiReducers);
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickSideItem = () => {
    if (sidebar.level.length) {
      dispatch(updateSidebarController({ level: sidebar.level }));
    } else {
      dispatch(updateSidebarController({ level: sidebar.redirectLevel }));
    }
  };

  return (
    <li
      onClick={onClickSideItem}
      className={cn(
        "relative px-4 py-3 hover:bg-yellow cursor-pointer",
        sidebar.level.length > 1 && "ml-8",
        isEqual(uiState.sidebarControler.level, sidebar.level) && s.active
      )}
    >
      <Link href={sidebar.link}>
        <a>{sidebar.title}</a>
      </Link>
    </li>
  );
};

export default SidebarItem;
