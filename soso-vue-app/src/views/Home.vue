<template>
  <div class="home">
    <div>{{fps}}</div>
    <Scene  @fps="fpsReceived"/>
  </div>
</template>

<script>
import Scene from './Scene.vue'
export default {
  components: {Scene},
  data() {
    return {
      fps: 0,
    };
  },
  methods: {
    fpsReceived(fps) {
      this.fps = fps;
    },
  },
}

</script>
