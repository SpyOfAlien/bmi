import cn from "classnames";
import s from "../hamburgur/hamburgur.module.css";
import { useState } from "react";
import {
  setModalView,
  openModal,
  closeModal,
} from "../../../store/actions/ui-action";
import * as CONST from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const Hamburger = () => {
  const uiState = useSelector((state) => state.uiReducers);
  const dispatch = useDispatch();

  const onHamburgurClick = () => {
    if (!uiState.modal.isOpen) {
      dispatch(openModal());
      dispatch(setModalView(CONST.MODAL_VIEW.MENU));
    } else {
      dispatch(closeModal());
    }
  };

  return (
    <div
      onClick={onHamburgurClick}
      className={cn(
        "cursor-pointer bg-yellow p-2 flex items-center justify-center",
        s.wrapper
      )}
    >
      <div className={cn(s.hamburger, { [s.open]: uiState.modal.isOpen })}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
