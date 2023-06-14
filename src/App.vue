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
          //console.log(response);
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch((error) => {
          //console.log(error);
          this.error = error.message;
        });
    },
    getImage(path) {
      return this.base_API + "storage/" + path;
    },
    nextPage(path){
      this.getProjects(path);
    },
    prevPage(path){
      this.getProjects(path);
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

    <div class="jumbotron jumbotron-fluid my-5">
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

  <section class="vue-home" v-if="projects">
    <div class="container">
      <div class="row g-3">
        <div class="col-12" v-for="project in projects.data" :key="project['id']">
          <div class="card">
            <img
              class="card-img-top"
              :src="getImage(project.cover_image)"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">{{ project.name }}</h4>
              <h5>Repo: {{ project.repoUrl }}</h5>
              <h5>Date: {{ project.startingDate }}</h5>
              <h5>
                Type:
                <span v-if="project.type">{{ project.type.name }}</span>
                <span v-else>N/A</span>
              </h5>
              <h5>Technologies:</h5>
              <ul>
                <li
                  v-for="technology in project.technologies"
                  :key="technology.id"
                >
                  {{ technology.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation" class="d-flex justify-content-center">
      <ul class="pagination my-4">
        <li class="page-item">
          <button class="page-link" aria-label="Previous" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" aria-label="Next" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
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
