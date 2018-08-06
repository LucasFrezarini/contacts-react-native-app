import { Map, List } from "immutable";

export const types = {
  LOAD: "contacts/LOAD",
  LOAD_SUCCESS: "contacts/LOAD_SUCCESS",
  LOAD_FAIL: "contacts/LOAD_FAIL",
  ADD: "contacts/ADD"
};

const initialState = new Map({
  list: new List(),
  loading: false,
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD:
      return state.set("loading", true);
    case types.LOAD_SUCCESS:
      return state.set("list", action.payload.data);
    case types.LOAD_FAIL:
      return state.set("loading", false);
      case types.ADD: {
        const actualList = state.get("list");
        const contact = action.contact;
  
        return state.set("list", actualList.concat(contact));
    }
    default:
      return state;
  }
}

export function load() {
  return {
    type: types.LOAD,
    payload: {
      request: {
        url: `/contacts`
      }
    }
  };
}

export function add(contact) {
  return {
    type: types.ADD,
    contact
  }
}
