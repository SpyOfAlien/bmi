import { UI } from "../actions/ui-action";

const initialState = {
  modal: {
    isOpen: false,
    view: "",
  },
  navHovered: [],
  sidebarControler: {
    page: "",
    level: [],
  },
};

export default function uiReducers(state = initialState, action) {
  switch (action.type) {
    case UI.OPEN_MODAL:
      return {
        ...initialState,
        modal: {
          ...state.menu,
          isOpen: true,
        },
      };
    case UI.CLOSE_MODAL:
      return {
        ...initialState,
        modal: {
          ...state.modal,
          isOpen: false,
        },
      };
    case UI.SET_MODAL_VIEW:
      return {
        ...initialState,
        modal: {
          ...state.modal,
          view: action.payload,
        },
      };

    case UI.HOVER_NAV:
      return {
        ...initialState,
        navHovered: action.payload,
      };

    case UI.UPDATE_SIDEBAR_CONTROLLER:
      return {
        ...initialState,
        sidebarControler: action.payload,
      };

    default:
      return state;
  }
}
