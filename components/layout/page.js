import Header from "../header/header";
import Footer from "../footer/footer";
import Modal from "../ui/modal/modal";
import { useSelector, useDispatch } from "react-redux";
import * as CONST from "../../utils/constants";
import Menu from "../menu/menu";
import useScrollBlock from "../../utils/hooks/useScrollLock";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { closeModal, hoverNav } from "../../store/actions/ui-action";
import cn from "classnames";

const Page = ({ children }) => {
  const uiState = useSelector((state) => state.uiReducers);
  const router = useRouter();
  const dispatch = useDispatch();
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (uiState.modal.isOpen) {
      blockScroll();
    } else {
      dispatch(hoverNav(null));
      allowScroll();
    }
  }, [uiState.modal]);

  useEffect(() => {
    if (uiState.modal.isOpen && uiState.modal.view === CONST.MODAL_VIEW.MENU) {
      dispatch(closeModal());
      dispatch(hoverNav(null));
    }
  }, [router.pathname]);

  return (
    <div className={cn(uiState.modal.isOpen && "relative")}>
      <Modal isOpen={uiState.modal.isOpen}>
        {uiState.modal.view === CONST.MODAL_VIEW.MENU && <Menu />}
      </Modal>

      <Header />
      <main style={{ marginTop: "60px" }}>{children}</main>
      <Footer />
    </div>
  );
};
export default Page;
