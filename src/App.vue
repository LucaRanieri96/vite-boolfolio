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
  color: #eeeeee;
  background-image: url(./assets/imgs/VmZHnTO.webp);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
