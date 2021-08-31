import { createStore } from "vuex";

// modules
import counterStore from "./counter";

export default createStore({
  modules: {
    counter: counterStore,
  },
});
