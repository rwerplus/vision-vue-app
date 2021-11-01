// vuex.d.ts

import {ComponentCustomProperties} from 'vue'
import {Store} from 'vuex'

declare module '@vue/runtime-core' {
    // 声明自己的 store state
    interface State {
        count: number
    }

    // 为 `this.$store` 提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
// window
declare global {
    interface Window {
        /**
         * @param {appData}全局应用数据
         */
        appData: any
        /**
         *@param {__macaca_latest_error}用于 macaca E2E 自动化测试
         */
        __macaca_latest_error: any
        /**
        *@param {tracker}记录错误堆栈
        * */
        tracker: any
        /**
         *@param {_macaca_runtime_collector} Macaca回归使用
         */
        _macaca_runtime_collector: any
    }
}