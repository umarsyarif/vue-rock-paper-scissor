<template>
  <img
    v-for="option in options"
    :key="option.name"
    class="options"
    :src="option.image"
    :alt="option.name"
    @click="store.methods.choose(option.name)"
  />
</template>

<script>
import { inject } from "vue";

export default {
  name: "Options",
  props: {
    options: { type: Object, default: {} },
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