import { Map } from "immutable";

export const types = {
   LOAD: "contacts/LOAD",
   LOAD_SUCCESS: "contacts/LOAD_SUCCESS",
   LOAD_FAIL: "contacts/LOAD_FAIL"
};

const initialState = new Map({
   list: [],
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
