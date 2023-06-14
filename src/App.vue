<script>

import HelloWorld from "./components/ProjectList.vue";

export default {
  components: {},
 
};
</script>

<template>
  <header>
    <nav class="navbar bg-light justify-content-around">
        <a class="nav-link active" href="/">Home</a>
        <a class="nav-link" href="/about">About</a>
        <a class="nav-link" href="/contacts">Contact</a>
    </nav>
  </header>
  <ProjectList/>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss";

.vue-home {
  color: #d4d5d6;
  background: #181818;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
