<template>
  <div class="home">
    <h1>ROCK PAPER SCISSORS</h1>
    <Score />
    <Pick />
  </div>
</template>

<script>
// @ is an alias to /src
import Score from "@/components/Score";
import Pick from "@/components/Pick";

export default {
  name: "Home",
  components: {
    Score,
    Pick,
  },
};
</script>

<style scoped>
.home h1 {
  margin: 0 auto 0;
  font-size: 5rem;
  font-family: fantasy;
}
</style>