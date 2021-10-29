import {State, State_Mutation} from "./types";
import {MutationTree} from "vuex";

export const mutations: MutationTree<State> | undefined = {
    [State_Mutation.AUTHOR](state: State, payload: any) {
        state.author = {...payload}
    }
}