import { Map, List } from "immutable";

export const types = {
  SAVE: "contact/SAVE",
  SAVE_SUCCESS: "contact/SAVE_SUCCESS",
  SAVE_FAIL: "contact/SAVE_FAIL"
};

const initialState = new Map({
  data: new Map({
    email: "",
    firstName: "",
    lastName: "",
    phones: new List()
  })
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE:
      return state.set("saving", true);
    case types.SAVE_SUCCESS:
      return state.set("data", new Map({
        email: "",
        firstName: "",
        lastName: ""
      }));
    case types.SAVE_FAIL:
      return state.set("saving", false);
    default:
      return state;
  }
}

export function save(contact) {
  return {
    type: types.SAVE,
    payload: {
      request: {
        data: {
          contact
        },
        method: "POST",
        url: "/contacts",
      }
    }
  };
}
