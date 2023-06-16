<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
    };
  },
  mounted() {
    const videoElement = this.$refs.videoElement;
    videoElement.playbackRate = 0.33;
  },
};
</script>

<template>
  <AppHeader />

  <div class="body">
    <video ref="videoElement" autoplay loop muted class="video">
      <source src="/assets/videos/wallpaper.mp4" type="video/mp4" />
    </video>

    <router-view></router-view>
  </div>

  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss";

.body {
  color: #eeeeee;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 250px);
}

body::-webkit-scrollbar {
  width: 12px;              
}

body::-webkit-scrollbar-track {
  background: rgba($color: #082120eb, $alpha: 1);        
}

body::-webkit-scrollbar-thumb {
  background-color: black; 
}

.video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
