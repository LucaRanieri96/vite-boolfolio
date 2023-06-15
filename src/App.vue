<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  
  <div class="body">
    <router-view></router-view>

  </div>

  <AppFooter />
  
</template>

<style lang="scss">
@use "./styles/general.scss";

.body{
  color: #d4d5d6;
  background: #181818;
}
</style>
