import getRandomInt from "../../helpers/getRandomInt";

export const incrementRandomInt = async ({ commit }) => {
  commit("loading", true);
  const val = await getRandomInt();
  commit("loading", false);
  commit("incrementBy", val);
};
