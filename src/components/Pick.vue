<template>
  <div class="picker">
    <p class="current-game" v-show="store.state.currentGame.player">
      {{ store.state.currentGame.player }} vs
      {{ store.state.currentGame.computer }}
    </p>
    <Options :options="store.state.options" />
  </div>
</template>

<script>
import Options from "@/components/Options";

import { inject } from "vue";

export default {
  name: "Pick",
  components: {
    Options,
  },
  setup() {
    const store = inject("store");

    return {
      store,
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