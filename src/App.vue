<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {},
  data() {
    return {
      base_API: "http://127.0.0.1:8000/",
      projects_path: "api/projects",
      loading: true,
      projects: null,
      error: null,
    };
  },
  methods: {
    getProjects(url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
    },
    getImage(path){
        return this.base_API + 'storage/' + path;
    }
  },
  mounted() {
    const url = this.base_API + this.projects_path;
    console.log(url);
    this.getProjects(url);
  },
};
</script>

<template>
  <section class="vue-home">
    <div class="container">
      <h1>Projects</h1>
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col" v-for="project in projects">
          <div class="card" style="width: 18rem">
            <img class="card-img-top" :src="getImage(project.cover_image)" alt="Card image cap" />
            <div class="card-body">
              <h4 class="card-title">{{ project.name }}</h4>
              <h5>Repo: {{ project.repoUrl }}</h5>
              <h5>Date: {{ project.startingDate }}</h5>
              <h5>id: {{ project.id }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
