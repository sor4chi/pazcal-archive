import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { Rank } from "types";
import { SET_RANKS } from "store/mutations.type";
import { FETCH_RANKS } from "store/actions.type";
import { RankService } from "api/rank";

interface State {
  ranks: Rank[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    ranks: [],
  },
  mutations: {
    [SET_RANKS](state, ranks: Rank[]) {
      state.ranks = ranks;
    },
  },
  actions: {
    async [FETCH_RANKS]({ commit }) {
      const ranks = await RankService.get.AllData();
      commit(SET_RANKS, ranks);
    },
  },
});

export const useStore = (): Store<State> => {
  return baseUseStore<State>(key);
};
