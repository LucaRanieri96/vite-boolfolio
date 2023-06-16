<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center p-5"> 
    <div class="align-items-center text">
      Luca Ranieri/Boolean 2023
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex align-content-center gap-4">
      <li>
        <a href="https://www.youtube.com/@videogiuoco2055/videos">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@videogiuoco2055/videos">
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
      </li>
      <li>
        <a href="https://www.twitch.tv/videogiuoco">
          <font-awesome-icon :icon="['fab', 'twitch']" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/lucaranieri96/">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>

footer{
  background-color: rgba($color: #000000, $alpha: 0.75);
  color: white;
  height: 150px;
}
 .text{
  font-size: 24px;
 }

  a{
    font-size: 24px;
    transition: all 0.3s;
    color: rgb(6, 107, 231);
  }
  a:hover{
    font-size: 30px;
    cursor: pointer;
    color: rgb(3, 88, 191);
  }
</style>
