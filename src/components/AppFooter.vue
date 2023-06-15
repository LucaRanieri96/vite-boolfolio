<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center p-5 my-4 border-top"> 
    <div class="align-items-center text">
      Luca Ranieri/Boolean 2023
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex align-content-center gap-4">
      <li>
        <a href="">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
      </li>
      <li>
        <a href="">
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
      </li>
      <li>
        <a href="">
          <font-awesome-icon :icon="['fab', 'twitch']" />
        </a>
      </li>
      <li>
        <a href="">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
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
