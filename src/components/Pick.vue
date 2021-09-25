<template>
  <div class="picker">
    <p class="current-game" v-show="store.state.currentGame.player">
      {{ store.state.currentGame.player }} vs
      {{ store.state.currentGame.computer }}
    </p>
    <img
      class="options"
      src="assets/2.png"
      alt="Rock"
      @click="store.methods.choose('Rock')"
    />
    <img
      class="options"
      src="assets/1.png"
      alt="Paper"
      @click="store.methods.choose('Paper')"
    />
    <img
      class="options"
      src="assets/3.png"
      alt="Scissors"
      @click="store.methods.choose('Scissors')"
    />
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const store = inject("store");
    const path = "@/../public/assets";

    return {
      store,
      path,
    };
  },
};
</script>

<style scoped>
.options {
  border-radius: 90px;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  background-color: transparent;
  cursor: pointer;
}
</style>