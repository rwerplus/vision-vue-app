import {State_Mutation} from "./types";

export const actions = {
    updateAuthor(ctx: any, payload: any) {
        ctx.commit(State_Mutation.AUTHOR, payload)
    }
}