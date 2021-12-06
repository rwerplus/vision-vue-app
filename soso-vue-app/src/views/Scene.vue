<template>
  <div style="width: 100vw;height: 100vh;">
    <canvas ref="bjsCanvas" id="renderCanvas"/>
  </div>
</template>

<script>
import { createScene } from "./BabylonScene";
export default {
  name: 'Scene',
  data() {
    return {
      myScene: null
    }
  },
  methods: {
  },
  async mounted() {
    const bjsCanvas = this.$refs.bjsCanvas;
    if (bjsCanvas) {
      const fpsCallback = (fps) => {
        this.$emit("fps", fps);
      };
      createScene(bjsCanvas, fpsCallback);
    }
  },
}
</script>
<style>
#renderCanvas {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>
