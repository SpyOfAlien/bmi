export const UI = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MENU",
  SET_MODAL_VIEW: "SET_MODAL_VIEW",

  HOVER_NAV: "HOVER_NAV",

  UPDATE_SIDEBAR_CONTROLLER: "UPDATE_SIDE_CONTROLLER",
};

export const openModal = () => ({
  type: UI.OPEN_MODAL,
});
export const closeModal = () => ({
  type: UI.CLOSE_MODAL,
});
export const setModalView = (view) => ({
  type: UI.SET_MODAL_VIEW,
  payload: view,
});

export const hoverNav = (nav) => ({
  type: UI.HOVER_NAV,
  payload: nav,
});
export const updateSidebarController = (control) => ({
  type: UI.UPDATE_SIDEBAR_CONTROLLER,
  payload: control,
});
