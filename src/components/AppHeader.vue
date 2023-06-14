<script>
export default {
  name: 'AppHeader'
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
</template>


<style lang="sass" scoped>

</style>
