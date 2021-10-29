// store.ts
// @ts-ignore
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import {State} from './app/types'
import state from './app/state'
import {mutations} from "./app/mutations";
import {actions} from "./app/actions";
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state,
    mutations,
    actions,
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
    return baseUseStore(key)
}