<template>
  <div class="score">
    <div class="row">
      <h3>Score</h3>
      <div class="score-board">
        <div class="player">You</div>
        <span class="score-details">
          {{ store.state.playerScore }} : {{ store.state.computerScore }}
        </span>
        <div class="player">Computer</div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
};
</script>

<style scoped>
.score {
  width: 400px;
  border: 2px solid;
  border-radius: 24px;
  margin: 0 auto 24px;
  padding: 0 0 10px;
}

.score h3 {
  margin-bottom: 0;
}

.score-details {
  margin: 0 24px 0;
}

.score .player {
  width: 70px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  color: white;
  font-size: 12px;
  background-color: dimgrey;
}

.score span {
  font-size: 64px;
}

.score-board {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>