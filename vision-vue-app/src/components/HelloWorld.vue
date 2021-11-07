<template>
  <h1>{{ msg }}</h1>
  <h1>{{ labels }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import {ref, defineEmits} from 'vue'
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
  msg: 'hello',
  labels: () => ['one', 'two']
})

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
