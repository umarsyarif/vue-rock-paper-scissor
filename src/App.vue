<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/rules">Rules</router-link>
  </div>
  <router-view />
  <footer>
    Made by <a href="https://github.com/umarsyarif">Umar Syarif</a> &copy; 2021
  </footer>
</template>

<script>
import { provide } from "vue";
import store from "@/store";

export default {
  setup() {
    provide("store", store);
  },
};
</script>

<style>
html {
  background-color: coral;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: darkslateblue;
}

footer {
  margin-top: 24px;
}

footer a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
