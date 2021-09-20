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
        ...state,
        modal: {
          ...state.menu,
          isOpen: true,
        },
      };
    case UI.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: false,
        },
      };
    case UI.SET_MODAL_VIEW:
      return {
        ...state,
        modal: {
          ...state.modal,
          view: action.payload,
        },
      };

    case UI.HOVER_NAV:
      return {
        ...state,
        navHovered: action.payload,
      };

    case UI.UPDATE_SIDEBAR_CONTROLLER:
      return {
        ...state,
        sidebarControler: action.payload,
      };

    default:
      return state;
  }
}
