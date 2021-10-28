<template>
  <h1>132456798</h1>
  <h1>{{hsk}}}</h1>
</template>

<script setup lang="ts">
import {ref} from 'vue'
/*
* defineProps 或 defineEmits 只能是要么使用运行时声明，要么使用类型声明。同时使用两种声明方式会导致编译报错。
* */

const emit = defineEmits(['change', 'delete'])
const count = ref(0)

interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  hsk: 'hello',
  labels: () => ['one', 'two']
})

</script>
