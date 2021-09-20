import cn from "classnames";
import s from "./modal.module.css";

const Modal = ({ children, isOpen }) => {
  return (
    <div className={cn("fixed w-full h-full", s.root, { [s.open]: isOpen })}>
      <div className={cn("w-full h-full", s.modal)}>{children}</div>
    </div>
  );
};

export default Modal;
