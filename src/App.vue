<script>



export default {
  
 
};
</script>

<template>

  <header>
    <nav class="navbar bg-light justify-content-around">
        <router-link class="nav-link active" :to="{'name' : 'home'}">Home</router-link>
        <router-link class="nav-link" :to="{'name' : 'about'}">About</router-link>
        <router-link class="nav-link" :to="{'name' : 'contacts'}">Contact</router-link>
    </nav>
  </header>

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
