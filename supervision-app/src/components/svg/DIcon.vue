<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string
  size?: 'small' | 'middle' | 'large'
  className?: string
}

const { name, size, className } = defineProps<Props>();

const iconName = computed(() => {
  return `#icon-${name}`
})

const svgClass = computed(() => {
  return ['svg-icon', className ? className : '', `icon-${size}`]
})
</script>

<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>


<style lang="scss">
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon {
  width: 16px;
  height: 16px;
  &-small {
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  &-middle {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
}
</style>