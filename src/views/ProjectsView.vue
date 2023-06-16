<script>
import ProjectList from "../components/ProjectList.vue";

export default {
  components: {
    ProjectList
  },
  name: 'HomeView'
};
</script>


<template>
  <div>
    <div class="jumbotron jumbotron-fluid py-5">
      <div class="container">
        <h1 class="display-3">All My Projects</h1>
        <p class="lead">
          This is a list of all the repositories I worked on during the 6 months
          of the Boolean lessons.
        </p>
        <hr class="my-2" />
        <p class="lead">
          Visit my profile. =>
          <a
            class="btn btn-danger"
            href="https://github.com/LucaRanieri96"
            role="button"
            >GitHub</a
          >
        </p>
      </div>
    </div>
  
    <ProjectList/>
  </div>
</template>


<style lang="scss" scoped>
.jumbotron {
  background-color: rgba($color: #10413f, $alpha: 0.5);
}
</style>